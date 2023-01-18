import useBooks from "../hooks/useBooks";
import { IBookItemInfo } from "../types";

import BookInfo from "../components/BookInfo";

export default function Recommended() {
  const {
    getBooksQuery: { isLoading, error, data: Books },
  } = useBooks();

  if (isLoading) return <p>📚 추천 도서를 불러오고 있습니다 📚</p>;
  if (error)
    return <p>추천 도서 불러오기에 실패했습니다. 다시 시도해주세요!</p>;

  return (
    <main className="my-10">
      <h1 className="text-center text-2xl my-10 font-bold">추천 도서</h1>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {Books?.map((book: IBookItemInfo, idx: number) => {
          return <BookInfo key={book.regDate + idx} book={book} />;
        })}
      </ul>
    </main>
  );
}
