import { ISearchBookItemInfo } from "../types";
import ResultItem from "./ResultItem";

export default function SearchResult({
  data,
}: {
  data: ISearchBookItemInfo[];
}) {
  return (
    <ul>
      {data?.map((el: ISearchBookItemInfo) => {
        return <ResultItem key={el.isbn} data={el} />;
      })}
    </ul>
  );
}
