import { useRouter } from "next/router";

import ChatInput from "./chat_input";

const NewChat = () => {
  const router = useRouter();
  const handleSubmit = async (userMsg: string) => {
    const res = await fetch("http://localhost:8000/conversations/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_msg: userMsg }),
    });

    const data = await res.json();

    router.push(`/chat/${data.data.conversation.id}`);

    return;
  };

  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col items-center justify-center gap-3 px-2">
      <h1 className="text-[28px] leading-[34px] font-normal tracking-[0.38px]">
        A chat-gpt clone
      </h1>
      <div
        className="max-w-md text-center text-base leading-[24px] font-normal tracking-[-0.32px] text-balance mb-5"
        style={{ color: "#5d5d5d" }}
      >
        A fun project that supports branching conversations
      </div>
      <ChatInput handleSubmit={handleSubmit} customClassName="sm:max-w-1/2" />
    </div>
  );
};

export default NewChat;
