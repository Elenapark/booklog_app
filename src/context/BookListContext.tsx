import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Books from "../api/service/books";
import BookSearch from "../api/service/book-search";
import { KcisaClient } from "../api/client/bookclient";
import { KaKaoSearchClient } from "../api/client/searchclient";

const kcisa = new KcisaClient();
const books = new Books(kcisa, {
  params: {
    numOfRows: 12,
    pageNo: 1,
  },
});

const kakaoSearchBooks = new KaKaoSearchClient();
const searchBooks = new BookSearch(kakaoSearchBooks);

const bookListContext = createContext<{
  books: Books;
  searchBooks: BookSearch;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
} | null>(null);

export default function BookListProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <bookListContext.Provider
      value={{ books, searchBooks, keyword, setKeyword }}
    >
      {children}
    </bookListContext.Provider>
  );
}

export const useBookList = () => {
  const context = useContext(bookListContext);
  if (!context) {
    throw new Error("useBookList는 BookListProvider 안에서 써야합니다");
  }
  return context;
};
