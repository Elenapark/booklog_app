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

  if (isLoading) return <Warning text="π μΆμ² λμλ₯Ό λΆλ¬μ€κ³  μμ΅λλ€ π" />;
  if (error)
    return (
      <Warning text="μΆμ² λμ λΆλ¬μ€κΈ°μ μ€ν¨νμ΅λλ€. λ€μ μλν΄μ£ΌμΈμ!" />
    );

  return (
    <section className="my-10">
      <h1 className="text-center text-2xl my-10 font-bold">μΆμ² λμ</h1>
      {Books?.length === 0 && (
        <Warning text="μΆμ² λμ λ¦¬μ€νΈλ₯Ό μ€λΉμ€μλλ€." />
      )}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Books?.slice(0, 40).map((book: IBookItemInfo, idx: number) => {
          return (
            <BookInfo
              key={book.id + idx}
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
