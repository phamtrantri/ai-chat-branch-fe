import { useRef, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

// import TextareaAutosize from "react-autosize-textarea";

interface IChatInputProps {
  customClassName?: string;
  isNewChat?: boolean;
  handleSubmit: (userMsg: string) => Promise<void> | void;
}

const ChatInput = ({ customClassName, handleSubmit }: IChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [userMsg, setUserMsg] = useState("");

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    const container = containerRef.current;

    if (textarea) {
      textarea.style.height = textarea.scrollHeight + "px";
      const lines = getTextareaLineCount(textarea);

      if (lines > 1 && container) {
        container.style.borderRadius = "1rem";
      }
      if (lines >= 2) {
        textarea.style.transition = "";
        setTimeout(() => {
          textarea.style.overflowY = "auto";
        }, 100);
      }
    }
  };
  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "48px";
    }
  };

  const getTextareaLineCount = (textarea: HTMLTextAreaElement): number => {
    const computedStyles = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(computedStyles.lineHeight);
    const paddingTop = parseFloat(computedStyles.paddingTop);
    const paddingBottom = parseFloat(computedStyles.paddingBottom);
    const contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;

    const effectiveLineHeight =
      !isNaN(lineHeight) && lineHeight > 0
        ? lineHeight
        : (parseFloat(computedStyles.fontSize) || 16) * 1.2;

    return Math.max(1, Math.ceil(contentHeight / effectiveLineHeight));
  };

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
        border-default-300 p-3 bg-white shadow-md transition-[border-radius] duration-150 ease-out ${customClassName}`}
      style={{ borderRadius: "200px" }}
    >
      <textarea
        ref={textareaRef}
        className="w-full focus:outline-none resize-none max-h-[200px] overflow-y-auto bg-transparent"
        placeholder="Ask anything. Shift + Enter to Submit"
        rows={1}
        style={{ transition: "height 0.15s ease-out", overflowY: "hidden" }}
        value={userMsg}
        onChange={(e) => setUserMsg(e.target.value)}
        onInput={adjustTextareaHeight}
        onKeyDown={handleKeyDown}
      />
      <button className="h-9 w-9 rounded-full bg-black flex items-center justify-center cursor-pointer self-end">
        <IoArrowUpOutline className="text-white w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default ChatInput;
