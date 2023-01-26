import { useQuery } from "@tanstack/react-query";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import Warning from "../components/Warning";
import { useBookList } from "../context/BookListContext";
import useDebounce from "../hooks/useDebounce";

export default function NewBookLog() {
  const { searchBooks, keyword } = useBookList();
  const debouncedKeyword = useDebounce(keyword, 800);

  const { error, data } = useQuery(
    ["search", debouncedKeyword],
    () =>
      searchBooks.searchBooks({
        params: {
          query: debouncedKeyword,
        },
      }),
    {
      refetchOnWindowFocus: false,
      enabled: !!debouncedKeyword,
      staleTime: Infinity,
    }
  );

  return (
    <>
      <SearchInput placeHolder="책 제목, 지은이 또는 출판사 등 관련 정보를 검색해보세요!" />
      {error && <Warning text="검색 결과를 불러오는데 실패했습니다." />}
      {!data && <Warning text="📚 읽는 중이거나 읽은 책을 검색해보세요! 📚" />}
      {data?.length === 0 && <Warning text="검색 결과가 없습니다." />}
      {data && <SearchResult data={data} />}
    </>
  );
}
