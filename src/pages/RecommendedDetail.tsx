import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import useWishlist from "../hooks/useWishlist";
import { IBookItemInfo } from "../types";

export default function RecommendedDetail() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // save to wishlist

  const {
    wishlistMutation: { mutate, isLoading, error },
  } = useWishlist();
  const [success, setSuccess] = useState<string | null>("");
  const { state }: { state: IBookItemInfo } = useLocation();

  return (
    <main className="p-2">
      {/* 출판사명 추가 */}
      <p className="mb-10 text-zinc-500">{`> ${state.title}`}</p>
      <section className="flex flex-col md:flex-row justify-between items-end">
        <div className="w-full p-2 md:w-1/3 md:p-0 shadow-md">
          <img
            src={state.thumbnail}
            alt={state.title}
            className="w-full h-full object-contain"
          />
        </div>
        <aside className="w-full mt-4 flex flex-col md:w-2/3 md:ml-6 md:mt-0">
          <div className="flex items-end">
            <h1 className="text-2xl font-bold mr-2">{state.title}</h1>
            <a
              href={state.url}
              target="_blank"
              className=" cursor-pointer mr-2 hover:text-indigo-600"
              rel="noreferrer"
            >
              책 구매하러 가기
            </a>
          </div>

          <Button
            text={isLoading ? "위시리스트에 담는중 ..." : "위시리스트에 담기"}
            disabled={isLoading}
            onClick={() =>
              mutate(
                {
                  id: state.id,
                  title: state.title,
                  thumbnail: state.thumbnail,
                  url: state.url,
                },
                {
                  onSuccess: () => {
                    setSuccess("✅ 위시리스트에 아이템을 담았습니다.");
                    setTimeout(() => {
                      setSuccess(null);
                    }, 3000);
                  },
                  onError: () => {
                    if (!user) {
                      alert("로그인이 필요합니다.");
                      navigate("/");
                    }
                  },
                }
              )
            }
          />
        </aside>
      </section>
      <>
        {success && (
          <p className={`${success ? "block" : "hidden"}`}>{success}</p>
        )}
        {error && (
          <p className={`${success ? "block" : "hidden"}`}>
            에러가 발생했습니다.
          </p>
        )}
      </>
    </main>
  );
}
