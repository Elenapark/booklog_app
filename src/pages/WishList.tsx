import useWishlist from "../hooks/useWishlist";

export default function WishList() {
  const {
    wishlistQuery: { isLoading, error, data },
  } = useWishlist();


  return (
    <section>
      {data?.length === 0 && <p>위시리스트가 없습니다. 도서를 추가해주세요!</p>}
      <ul>
        {data?.map((el) => (
          <li key={el.id}>
            <img src={el.referenceIdentifier} alt={el.title} />
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
