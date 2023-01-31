import useBookLog from "../hooks/useBookLog";
import { IGetBookLogProps } from "../api/firebase";
import ResultItem from "../components/ResultItem";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Button from "../components/ui/Button";
import Warning from "../components/Warning";

export default function BookLog() {
  const navigate = useNavigate();
  const {
    booklogQuery: { data, isLoading, error },
    removeFromBooklog: { mutate: removeMutate },
  } = useBookLog();

  if (isLoading) return <>로딩중</>;
  if (error) return <>에러 발생</>;

  return (
    <section>
      <h1 className="text-center text-2xl my-10 font-bold">나의 북로그</h1>
      {data?.length === 0 && (
        <Warning text="나의 북로그 리스트가 비어있습니다. 북로그를 추가해보세요!" />
      )}
      <ul>
        {data &&
          data.map((el: IGetBookLogProps) => {
            return (
              <ResultItem
                key={el.info.isbn}
                data={el.info}
                type="booklogList"
                goTo={() =>
                  navigate(`/booklog/${el.info.title}`, { state: el })
                }
                icon={
                  <div className="ml-1">
                    <Button
                      text="삭제"
                      bgColor="bg-red-200"
                      onClick={() => removeMutate(el)}
                    />
                  </div>
                }
              />
            );
          })}
      </ul>
    </section>
  );
}
