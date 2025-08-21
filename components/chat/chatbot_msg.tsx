import { useState } from "react";

const ChatbotMsg = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex max-w-full flex-col grow"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="min-h-8 relative flex w-full flex-col items-start gap-2 text-start break-words whitespace-normal">
        <div className="relative max-w-full p-2">
          <div className="whitespace-pre-wrap">
            I&apos;m doing great, thank you for asking! How about you? I&apos;m
            doing great, thank you for asking! How about you? I&apos;m doing
            great, thank you for asking! How about you? I&apos;m doing great,
            thank you for asking! How about you?
          </div>
        </div>
        <div
          className={`absolute flex flex-row gap-1 text-xs text-gray-500 right-3 -top-4 bg-gray-100 rounded-lg py-1 px-2 transition-all duration-200 ease-in-out ${
            isHovered
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
          }`}
        >
          <div className="cursor-pointer hover:opacity-70 transition-all duration-200">
            New thread
          </div>
          |<div className="cursor-pointer">Thread 1</div>|
          <div className="cursor-pointer">Thread 2 </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMsg;
