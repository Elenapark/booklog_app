import { IBookItemInfo } from "../types";
import { useNavigate } from "react-router-dom";

export default function BookInfo({ book }: { book: IBookItemInfo }) {
  const navigate = useNavigate();

  return (
    <li
      className="w-full shadow-lg rounded-md cursor-pointer relative "
      onClick={() =>
        navigate(`/books/recommended/${book.title}`, { state: book })
      }
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
