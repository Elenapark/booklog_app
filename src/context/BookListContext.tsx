import { createContext, ReactNode, useContext } from "react";
import Books from "../api/books";
import { KcisaClient } from "../api/client/bookclient";

const kcisa = new KcisaClient();
const books = new Books(kcisa, {
  params: {
    numOfRows: 20,
    pageNo: 1,
  },
});

const bookListContext = createContext<{
  books: Books;
} | null>(null);

export default function BookListProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <bookListContext.Provider value={{ books }}>
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
