import { WishListType } from "../hooks/useWishlist";
import { IBookItemInfo } from "../types";
import cx from "classnames";

interface IBookInfo {
  book: IBookItemInfo | WishListType;
  onClick?: () => void;
  type?: "clickable" | "unclickable";
}

export default function BookInfo({
  book,
  onClick,
  type = "clickable",
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
      <div className="p-2">
        <h1 className="text-sm font-bold">{book.title}</h1>
      </div>
    </li>
  );
}
