import { useNavigate } from "react-router-dom";
import { ISearchBookItemInfo } from "../types";
import ResultItem from "./ResultItem";

export default function SearchResult({
  data,
}: {
  data: ISearchBookItemInfo[];
}) {
  const navigate = useNavigate();
  return (
    <ul>
      {data?.map((el: ISearchBookItemInfo) => {
        return (
          <ResultItem
            key={el.isbn}
            data={el}
            goTo={() => navigate(`/booklog/new/${el.title}`, { state: el })}
          />
        );
      })}
    </ul>
  );
}
