import { useRef, useState, useEffect } from "react";
import { IoArrowUpOutline, IoStop, IoCloseOutline } from "react-icons/io5";

interface IChatInputProps {
  customClassName?: string;
  isSubmitting: boolean;
  handleSubmit: (userMsg: string) => Promise<void> | void;
  handleStop?: () => void;
  newThreadMsg?: any;
  onCloseThread?: () => void;
}

const ChatInput = ({
  customClassName,
  handleSubmit,
  isSubmitting,
  handleStop,
  newThreadMsg,
  onCloseThread,
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

        if (lines > 1 || !!newThreadMsg) {
          container.style.borderRadius = "16px";
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
  }, [userMsg, newThreadMsg]);

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
      className={`flex flex-col w-full border-1 border-default-300 bg-white 
        shadow-md transition-[border-radius] duration-150 ease-out ${customClassName}`}
      style={{ borderRadius: "28px" }}
    >
      {!!newThreadMsg ? (
        <div className="w-full">
          <div className="mx-1 mt-1 rounded-t-[10px] rounded-b-lg bg-gray-100 border-1 border-default-100">
            <div className="flex items-center justify-between text-sm text-[#8f8f8f] font-medium px-1.5 border-b-1 border-default-200">
              <span>Thread starter</span>
              <IoCloseOutline
                className="cursor-pointer w-5 h-5 hover:opacity-70"
                onClick={onCloseThread}
              />
            </div>
            <div className="flex items-start text-sm py-1 px-1.5 gap-1.5 max-h-[75px] overflow-hidden">
              &quot;{newThreadMsg.content}&quot;
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex flex-row w-full justify-center items-center p-2.5">
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
          type="button"
          onClick={isSubmitting ? handleStop : _handleSubmit}
        >
          {isSubmitting ? (
            <IoStop className="text-white w-[20px] h-[20px] animate-pulse" />
          ) : (
            <IoArrowUpOutline className="text-white w-[20px] h-[20px]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
