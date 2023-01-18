import useBooks from "../hooks/useBooks";
import { IBookItemInfo } from "../types";

import BookInfo from "../components/BookInfo";
import Warning from "../components/Warning";
import { useNavigate } from "react-router-dom";

export default function Recommended() {
  const navigate = useNavigate();
  const {
    getBooksQuery: { isLoading, error, data: Books },
  } = useBooks();

  if (isLoading) return <Warning text="📚 추천 도서를 불러오고 있습니다 📚" />;
  if (error)
    return (
      <Warning text="추천 도서 불러오기에 실패했습니다. 다시 시도해주세요!" />
    );

  return (
    <section className="my-10">
      <h1 className="text-center text-2xl my-10 font-bold">추천 도서</h1>
      {Books?.length === 0 && (
        <Warning text="추천 도서 리스트를 준비중입니다." />
      )}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Books?.map((book: IBookItemInfo, idx: number) => {
          return (
            <BookInfo
              key={book.regDate + idx}
              book={book}
              onClick={() =>
                navigate(`/books/recommended/${book.title}`, { state: book })
              }
            />
          );
        })}
      </ul>
    </section>
  );
}
