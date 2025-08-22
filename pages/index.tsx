import DefaultLayout from "@/layouts/default";
import NewChat from "@/components/chat/new_chat";
import ChatHeader from "@/components/chat/chat_header";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="relative flex max-w-full h-full flex-1 flex-col">
        <ChatHeader />
        <NewChat />
      </div>
    </DefaultLayout>
  );
}
