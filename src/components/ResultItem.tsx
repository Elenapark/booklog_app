import { ReactNode } from "react";
import { ISearchBookItemInfo } from "../types";
import Button from "./ui/Button";

export default function ResultItem({
  data,
  type = "searchResult",
  goTo,
  icon,
}: {
  data: ISearchBookItemInfo;
  type?: "booklogList" | "searchResult";
  goTo: () => void;
  icon?: ReactNode;
}) {
  return (
    <li className="p-2 border mb-4 rounded-md shadow-lg flex flex-1 justify-around items-center min-h-[192px]">
      <div className="w-[120px]">
        <img
          src={data.thumbnail === "" ? "/images/no-image.png" : data.thumbnail}
          alt={data.title}
          className="basis-[120px] object-contain w-full h-full"
        />
      </div>
      <div className="ml-2 flex flex-col flex-1">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <div className="text-sm text-zinc-600">
          {data.authors.join(", ")} /
          <span className="text-xs">{data.publisher}</span>
        </div>
        <p className="my-4">{data.contents.slice(0, 100)}..</p>
        <nav className="flex items-center justify-end">
          <a
            href={data.url}
            target="_blank"
            className=" cursor-pointer mr-2 hover:text-indigo-600"
          >
            책 더 알아보기
          </a>
          <Button
            text={
              type === "searchResult"
                ? "내 북로그에 추가하기"
                : "내 북로그 보기"
            }
            onClick={goTo}
          />
          {icon}
        </nav>
      </div>
    </li>
  );
}
