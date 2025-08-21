import { useRef, useState } from "react";

interface IChatInputProps {
  customClassName?: string;
}

const ChatInput = ({ customClassName }: IChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [searchStr, setSearchStr] = useState("");

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "48px";
    }
  };

  const handleSubmit = () => {};

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`flex w-full border-1 border-default-300 rounded-3xl p-3 bg-white ${customClassName}`}
    >
      <textarea
        ref={textareaRef}
        className="w-full focus:outline-none resize-none min-h-[48px] max-h-[200px] overflow-y-auto"
        placeholder="Ask anything. Shift + Enter to Submit"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        onInput={adjustTextareaHeight}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ChatInput;
