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
    return <Warning text="π μμ λ¦¬μ€νΈλ₯Ό λΆλ¬μ€κ³  μμ΅λλ€ π" />;
  if (error)
    return (
      <Warning text="μμλ¦¬μ€νΈ λΆλ¬μ€κΈ°μ μ€ν¨νμ΅λλ€. λ€μ μλν΄μ£ΌμΈμ!" />
    );

  return (
    <section>
      <h1 className="text-center text-2xl my-10 font-bold">μμλ¦¬μ€νΈ</h1>
      {WishList?.length === 0 && (
        <Warning text="μμλ¦¬μ€νΈκ° λΉμ΄μμ΅λλ€. λμλ₯Ό μΆκ°ν΄λ³΄μΈμ!" />
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
                  <span className="text-xs">μ­μ </span>
                </div>
              }
            />
          );
        })}
      </ul>
    </section>
  );
}
