import { useQuery } from "@tanstack/react-query";
import { useBookList } from "../context/BookListContext";

export default function useBooks() {
  const { books } = useBookList();

  const getBooksQuery = useQuery(["recommended"], () => books.getList(), {
    staleTime: 1000 * 60 * 5,
  });

  return { getBooksQuery };
}
