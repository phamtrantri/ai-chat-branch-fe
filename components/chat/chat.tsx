import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import ChatInput from "./chat_input";
import ChatbotMsg from "./chatbot_msg";
import UserMsg from "./user_msg";

import { createStreamedMessage } from "@/services";
import { generateUUID } from "@/utils/uuid";

const Chat: React.FC<{ history: Array<any> }> = ({ history = [] }) => {
  const router = useRouter();
  const { id } = router.query || {};
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isCreatedFirstMsgRef = useRef(false);
  const [messages, setMessages] = useState<
    { id: string; content: string; role: "user" | "assistant" }[]
  >([]);
  const [streamedText, setStreamedText] = useState("");
  const [isSubmitting, setIsSubmiting] = useState(false);

  const submitMessage = async (
    userMsg: string,
    is_new_conversation = false
  ) => {
    if (!userMsg.trim()) {
      return;
    }
    setIsSubmiting(true);
    setMessages([
      ...messages,
      { id: generateUUID(), content: userMsg, role: "user" },
    ]);
    scrollToBottom();

    let reader;
    let fullContent = "";

    try {
      const response = await createStreamedMessage(
        Number(id),
        userMsg.trim(),
        is_new_conversation
      );

      if (!response.body) {
        throw new Error("ReadableStream not supported in this environment.");
      }

      reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();

        if (value) {
          const chunk = decoder.decode(value, { stream: true });

          fullContent += chunk;
          setStreamedText(fullContent);
        }
        done = streamDone;
        scrollToBottom();
      }
    } finally {
      reader && reader.releaseLock();
      setIsSubmiting(false);
      setMessages((prev) => [
        ...prev,
        { id: generateUUID(), content: fullContent, role: "assistant" },
      ]);
      setStreamedText("");
    }
  };
  const submitFirstMessage = async () => {
    if (
      history.length === 1 &&
      history[0].role === "user" &&
      !isCreatedFirstMsgRef.current
    ) {
      isCreatedFirstMsgRef.current = true;
      submitMessage(history[0].content, true);
    }
  };

  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current;

    scrollContainer?.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMessages([]);
    submitFirstMessage();
    scrollToBottom();
  }, [id]);

  const handleSubmit = async (userMsg: string) => {
    submitMessage(userMsg);
  };

  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col gap-3 px-2 py-4 overflow-hidden shrink-0">
      <div
        ref={scrollContainerRef}
        className="relative flex flex-col gap-10 h-full max-w-200 w-full mx-auto overflow-y-auto mb-25"
      >
        {history.map((msg) => {
          if (msg.role === "user") {
            return <UserMsg key={msg.id} message={msg} />;
          }

          return <ChatbotMsg key={msg.id} message={msg} />;
        })}
        {messages.map((msg) => {
          if (msg.role === "user") {
            return <UserMsg key={msg.id} message={msg} />;
          }

          return <ChatbotMsg key={msg.id} message={msg} />;
        })}
        {isSubmitting ? (
          <p className="mt-2 whitespace-pre-wrap">
            {streamedText}
            <span className="animate-pulse">|</span>
          </p>
        ) : null}
      </div>
      <ChatInput
        customClassName="absolute bottom-5 left-1/2 transform -translate-x-1/2 max-w-200 w-full"
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;
