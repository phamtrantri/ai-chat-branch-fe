import { Head } from "./head";

import Menu from "@/components/menu";

export default function DefaultLayout({
  children,
  conversations,
}: {
  children: React.ReactNode;
  conversations: Array<any>;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <main className="relative flex flex-row h-full w-full">
        <Menu conversations={conversations} />
        {children}
      </main>
    </div>
  );
}
