import DefaultLayout from "@/layouts/default";
import Menu from "@/components/menu";
import NewChat from "@/components/chat/new_chat";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Menu />
      <NewChat />
    </DefaultLayout>
  );
}
