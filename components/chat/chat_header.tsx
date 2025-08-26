import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";

import { formatBreadcrumItem } from "@/utils/formatter";

interface IProps {
  path?: any[];
}

const ChatHeader: React.FC<IProps> = ({ path }) => {
  const router = useRouter();

  return (
    <div className="relative flex w-full flex-row items-center justify-between p-4 border-b-1 border-gray-200">
      <div className="flex flex-col items-start gap-0.5 flex-1">
        <div className="text-base font-medium">ChatGPT Clone</div>
        {!isEmpty(path) && path ? (
          <Breadcrumbs size="sm">
            {path.map((elem, idx) => (
              <BreadcrumbItem
                key={elem.id}
                onClick={() => {
                  router.push(
                    `/chat/${elem.id}?focus=${path?.[idx + 1]?.message_id}`
                  );
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
    </div>
  );
};

export default ChatHeader;
