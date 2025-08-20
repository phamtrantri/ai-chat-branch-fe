import ChatInput from "./chat_input";

const NewChat = () => {
  return (
    <div className="relative flex h-full max-w-full flex-1 flex-col items-center justify-center gap-3">
      <h1 className="text-[28px] leading-[34px] font-normal tracking-[0.38px]">
        A chat-gpt clone
      </h1>
      <div
        className="max-w-md text-center text-base leading-[24px] font-normal tracking-[-0.32px] text-balance mb-5"
        style={{ color: "#5d5d5d" }}
      >
        A fun project that supports branching conversations
      </div>
      <ChatInput />
    </div>
  );
};

export default NewChat;
