import { useEffect, useRef } from "react";

import ChatInput from "./chat_input";
import ChatbotMsg from "./chatbot_msg";
import UserMsg from "./user_msg";

const Chat = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col gap-3 px-2 py-4 overflow-hidden shrink-0">
      <div
        ref={scrollContainerRef}
        className="relative flex flex-col gap-10 h-full max-w-200 w-full mx-auto overflow-y-auto mb-25"
      >
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
        <UserMsg />
        <ChatbotMsg />
      </div>
      <ChatInput customClassName="absolute bottom-5 left-1/2 transform -translate-x-1/2 max-w-200 w-full" />
    </div>
  );
};

export default Chat;
