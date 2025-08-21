import Chat from "@/components/chat/chat";
import ChatHeader from "@/components/chat/chat_header";
import DefaultLayout from "@/layouts/default";

export default function ChatPage() {
  return (
    <DefaultLayout>
      <div className="relative flex max-w-full h-full flex-1 flex-col">
        <ChatHeader />
        <Chat />
      </div>
    </DefaultLayout>
  );
}
