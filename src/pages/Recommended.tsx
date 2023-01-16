import useBooks from "../hooks/useBooks";
import { IBookItemInfo } from "../types";

export default function Recommended() {
  const { isLoading, error, data: Books } = useBooks();

  if (isLoading) return <p>📚 추천 도서를 불러오고 있습니다 📚</p>;
  if (error)
    return <p>추천 도서 불러오기에 실패했습니다. 다시 시도해주세요!</p>;

  return (
    <main>
      <ul>
        {Books?.items?.item?.map((book: IBookItemInfo, idx: number) => {
          return (
            <li key={book.regDate + idx}>
              <img src={book.referenceIdentifier} alt={book.title} />
              {book.title}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
