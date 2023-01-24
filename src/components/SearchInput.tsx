import React, { ChangeEvent } from "react";
import { useBookList } from "../context/BookListContext";

interface ISearchInputProps {
  type?: string;
  placeHolder: string;
}

export default function SearchInput({
  type = "text",
  placeHolder,
}: ISearchInputProps) {
  const { keyword, setKeyword } = useBookList();

  return (
    <input
      type={type}
      value={keyword}
      placeholder={placeHolder}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setKeyword(e.target.value)
      }
      className="block border p-2 mx-auto w-[600px] my-20 rounded-md text-xl"
    />
  );
}
