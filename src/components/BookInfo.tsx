import { IBookItemInfo } from "../types";
import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export default function BookInfo({ book }: { book: IBookItemInfo }) {
  const navigate = useNavigate();
  return (
    <li className="w-full shadow-lg rounded-md transition-all ease-in cursor-pointer hover:scale-105 relative">
      <div
        className="w-full h-[300px] border-b"
        onClick={() =>
          navigate(`/books/recommended/${book.title}`, { state: book })
        }
      >
        <img
          src={book.referenceIdentifier}
          alt={book.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-2">
        <h1 className="text-sm font-bold">{book.title}</h1>
        <FcLikePlaceholder className="absolute bottom-2 right-2 text-xl" />
      </div>
    </li>
  );
}
