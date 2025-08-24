import { useRef, useState, useEffect } from "react";
import { IoArrowUpOutline, IoStop } from "react-icons/io5";

// import TextareaAutosize from "react-autosize-textarea";

interface IChatInputProps {
  customClassName?: string;
  isSubmitting: boolean;
  handleSubmit: (userMsg: string) => Promise<void> | void;
  handleStop?: () => void;
}

const ChatInput = ({
  customClassName,
  handleSubmit,
  isSubmitting,
  handleStop,
}: IChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [userMsg, setUserMsg] = useState("");

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    const container = containerRef.current;

    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = "auto";

      // Set height to scrollHeight to fit content
      const newHeight = Math.min(textarea.scrollHeight, 200);

      textarea.style.height = `${newHeight}px`;

      // Adjust container border radius based on content
      if (container) {
        const lines = Math.ceil(newHeight / 24); // Approximate line height

        if (lines > 1) {
          container.style.borderRadius = "1rem";
        } else {
          container.style.borderRadius = "28px";
        }
      }
    }
  };

  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;
    const container = containerRef.current;

    if (textarea && container) {
      textarea.style.height = "24px";
      container.style.borderRadius = "28px";
    }
  };

  // Auto-resize when userMsg changes
  useEffect(() => {
    adjustTextareaHeight();
  }, [userMsg]);

  const _handleSubmit = () => {
    handleSubmit(userMsg);
    setUserMsg("");
    resetTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      _handleSubmit();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex w-full border-1 items-center justify-center 
        border-default-300 p-2.5 bg-white shadow-md transition-[border-radius] duration-150 ease-out ${customClassName}`}
      style={{ borderRadius: "28px" }}
    >
      <textarea
        ref={textareaRef}
        className="w-full focus:outline-none resize-none min-h-[24px] max-h-[200px] overflow-y-auto bg-transparent"
        placeholder="Ask anything. Shift + Enter to Submit"
        rows={1}
        style={{
          transition: "height 0.15s ease-out",
          overflowY: "hidden",
        }}
        value={userMsg}
        onChange={(e) => setUserMsg(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="flex items-center justify-center h-9 w-9 min-w-9 min-h-9 rounded-full bg-black cursor-pointer self-end border-0 p-0"
        onClick={isSubmitting ? handleStop : _handleSubmit}
      >
        {isSubmitting ? (
          <IoStop className="text-white w-[20px] h-[20px] animate-pulse" />
        ) : (
          <IoArrowUpOutline className="text-white w-[20px] h-[20px]" />
        )}
      </button>
    </div>
  );
};

export default ChatInput;
