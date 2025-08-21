import DefaultLayout from "@/layouts/default";
import NewChat from "@/components/chat/new_chat";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <NewChat />
    </DefaultLayout>
  );
}
