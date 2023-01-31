import useBookLog from "../hooks/useBookLog";
import { IGetBookLogProps } from "../api/firebase";
import ResultItem from "../components/ResultItem";
import { useNavigate } from "react-router-dom";

export default function BookLog() {
  const navigate = useNavigate();
  const {
    booklogQuery: { data, isLoading, error },
  } = useBookLog();

  if (isLoading) return <>로딩중</>;
  if (error) return <>에러 발생</>;

  return (
    <section>
      <h1 className="text-center text-2xl my-10 font-bold">나의 북로그</h1>
      {data &&
        data.map((el: IGetBookLogProps) => {
          return (
            <ResultItem
              key={el.info.isbn}
              data={el.info}
              type="booklogList"
              goTo={() => navigate(`/booklog/${el.info.title}`, { state: el })}
            />
          );
        })}
    </section>
  );
}
