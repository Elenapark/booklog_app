import { WishListType } from "../hooks/useWishlist";
import { IBookItemInfo } from "../types";
import cx from "classnames";
import { ReactNode } from "react";

interface IBookInfo {
  book: IBookItemInfo | WishListType;
  onClick?: () => void;
  type?: "clickable" | "unclickable";
  icon?: ReactNode;
}

export default function BookInfo({
  book,
  onClick,
  type = "clickable",
  icon,
}: IBookInfo) {
  return (
    <li
      className={`w-full shadow-lg rounded-md ${cx(
        type === "clickable" && { "cursor-pointer": true }
      )}`}
      onClick={onClick}
    >
      <div className="w-full h-[300px] border-b">
        <img
          src={book.referenceIdentifier}
          alt={book.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className={`p-2 ${cx(icon && { flex: true }, {
          "justify-between": true,
          "items-center": true,
        })}`}
      >
        <h1 className="text-sm font-bold">{book.title}</h1>
        {icon}
      </div>
    </li>
  );
}
