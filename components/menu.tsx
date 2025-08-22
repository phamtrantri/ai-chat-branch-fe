import { useState } from "react";
import { CiChat2, CiSearch, CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;

    setIsScrolled(scrollTop > 0);
  };

  return (
    <div className="relative h-full shrink-0 overflow-hidden border-e border-gray-200 w-[260px] bg-gray-50">
      <div className="relative flex h-full flex-col">
        <nav
          className="relative flex h-full w-full flex-1 flex-col overflow-y-auto transition-opacity duration-500"
          onScroll={handleScroll}
        >
          <div
            className={`sticky top-0 z-30 bg-gray-50 transition-shadow duration-200 ${
              isScrolled ? "shadow-md" : "shadow-none"
            }`}
          >
            <div className="touch:px-1.5 px-2">
              <div
                className="flex items-center justify-between"
                style={{ height: "calc(.25rem*13)" }}
              >
                <div className="pl-1 hover:bg-gray-200 rounded-lg p-1 transition-all duration-200">
                  <Link href="/">
                    <Image
                      alt="Picture of the Chat bot"
                      height={30}
                      src="/avatar.svg"
                      width={30}
                    />
                  </Link>
                </div>
                <div className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                  <CiMenuFries className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`sticky top-13 z-30 bg-gray-50 transition-shadow duration-200 ${
              isScrolled ? "shadow-md" : "shadow-none"
            }`}
          >
            <aside className="py-2 flex flex-col">
              <a
                href="/"
                className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CiChat2 className="w-5 h-5" /> New Chat
                </div>
              </a>
              <a
                href="/"
                className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CiSearch className="w-5 h-5" /> Search Chat
                </div>
              </a>
            </aside>
          </div>
          <aside className="flex flex-col py-2.5">
            <h2
              className="block text-sm font-normal mx-1.5 my-0 py-2 px-2.5 overflow-hidden text-ellipsis"
              style={{ color: "#8f8f8f" }}
            >
              Chats
            </h2>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Create First Database
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Deploy NextJs Fast API AWS
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
            <a
              href="/"
              className="flex items-center truncate text-sm mx-1.5 min-h-9 py-1.5 px-2.5 rounded-[10px] hover:bg-gray-200"
            >
              Japan PR point system
            </a>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
