import BookInfo from "../components/BookInfo";
import Warning from "../components/Warning";
import useWishlist from "../hooks/useWishlist";
import { AiFillDelete } from "react-icons/ai";

export default function WishList() {
  const {
    wishlistQuery: { isLoading, error, data: WishList },
    removeWishList: { mutate: removeMutate },
  } = useWishlist();

  if (isLoading)
    return <Warning text="📚 위시 리스트를 불러오고 있습니다 📚" />;
  if (error)
    return (
      <Warning text="위시리스트 불러오기에 실패했습니다. 다시 시도해주세요!" />
    );

  return (
    <section>
      <h1 className="text-center text-2xl my-10 font-bold">위시리스트</h1>
      {WishList?.length === 0 && (
        <Warning text="위시리스트가 비어있습니다. 도서를 추가해보세요!" />
      )}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {WishList?.map((item) => {
          return (
            <BookInfo
              key={item.id}
              book={item}
              type="unclickable"
              icon={
                <div
                  className="flex items-center cursor-pointer hover:bg-neutral-200 p-1 rounded-sm"
                  onClick={() => removeMutate(item)}
                >
                  <AiFillDelete />
                  <span className="text-xs">삭제</span>
                </div>
              }
            />
          );
        })}
      </ul>
    </section>
  );
}
