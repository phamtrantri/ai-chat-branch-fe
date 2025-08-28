import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

import MobileMenu from "../mobile_menu";

import { formatBreadcrumItem } from "@/utils/formatter";

interface IProps {
  path?: any[];
  conversations: any[];
}

const ChatHeader: React.FC<IProps> = ({ path, conversations }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex w-full flex-row items-center justify-between p-4 border-b-1 border-gray-200">
      <div className="flex flex-col items-start gap-1 sm:gap-0.5 flex-1">
        <div className="flex gap-2 items-center text-base font-medium">
          <HiMenuAlt2
            className="sm:hidden w-4.5 h-4.5"
            onClick={() => setIsMenuOpen(true)}
          />
          ChatGPT Clone
        </div>
        {!isEmpty(path) && path ? (
          <Breadcrumbs size="sm">
            {path.map((elem, idx) => (
              <BreadcrumbItem
                key={elem.id}
                onClick={() => {
                  if (idx < path.length - 1) {
                    router.push(
                      `/chat/${elem.id}?focus=${path?.[idx + 1]?.message_id}`
                    );
                  }
                }}
              >
                {path.length > 1 ? formatBreadcrumItem(elem.name) : elem.name}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        ) : null}
      </div>
      <div className="flex justify-end text-xs font-medium w-[75px]">
        <div>GPT-5</div>
      </div>
      <MobileMenu
        conversations={conversations}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default ChatHeader;
