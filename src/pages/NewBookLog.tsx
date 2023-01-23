import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FormEvent } from "react";
import Button from "../components/ui/Button";
import { useBookList } from "../context/BookListContext";
import useDebounce from "../hooks/useDebounce";
import { ISearchBookItemInfo } from "../types";

export default function NewBookLog() {
  const { searchBooks, keyword, setKeyword } = useBookList();
  const debouncedKeyword = useDebounce(keyword, 500);

  const { isLoading, error, data, refetch } = useQuery(
    ["search", debouncedKeyword],
    () =>
      searchBooks.searchBooks({
        params: {
          query: debouncedKeyword,
        },
      }),
    {
      refetchOnWindowFocus: false,
      enabled: !!debouncedKeyword,
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
          className="border"
        />
        <Button type="submit" text="검색하기" />
      </form>
      <ul>
        {data?.map((el: ISearchBookItemInfo) => (
          <li key={el.datetime}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}
