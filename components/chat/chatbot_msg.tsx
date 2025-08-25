import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatbotMsg: React.FC<{ message: any }> = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex max-w-full flex-col"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="min-h-8 relative flex w-full flex-col items-start gap-2 text-start break-words whitespace-normal">
        <div className="relative max-w-full p-2">
          <ReactMarkdown
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    customStyle={{ width: "100%", borderRadius: "8px" }}
                    language={match[1]}
                    style={vscDarkPlus}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
        <div
          className={`absolute flex flex-row gap-1 text-xs text-gray-500 left-2 -top-4 bg-gray-100 rounded-lg py-1 px-2 transition-all duration-200 ease-in-out ${
            isHovered
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
          }`}
        >
          {message.content ? (
            <>
              <div className="cursor-pointer hover:opacity-70 transition-all duration-200">
                New thread
              </div>
              |
              <div className="cursor-pointer hover:opacity-70 transition-all duration-200">
                Thread 1
              </div>
              |
              <div className="cursor-pointer hover:opacity-70 transition-all duration-200">
                Thread 2{" "}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatbotMsg;
