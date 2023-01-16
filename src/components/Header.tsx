import {
  FcReading,
  FcList,
  FcIdea,
  FcLike,
  FcAddDatabase,
} from "react-icons/fc";
import CustomLink from "./CustomLink";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, googleSignIn, googleSignOut } = useAuth();

  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto flex justify-between p-2">
        <div className="flex items-center cursor-pointer">
          <FcReading className="text-4xl sm:text-2xl" />
          <span onClick={() => navigate("/")} className="hidden sm:block">
            북로그
          </span>
        </div>
        <nav className="flex items-center gap-2">
          <CustomLink
            goTo="/books/recommended"
            icon={<FcIdea />}
            text="추천도서"
          />
          {user ? (
            <>
              <CustomLink
                goTo="/books/wishlist"
                icon={<FcLike />}
                text="위시리스트"
              />
              <CustomLink
                goTo="/booklog"
                icon={<FcList />}
                text="나의 북로그"
              />
              <CustomLink
                goTo="/booklog/new"
                icon={<FcAddDatabase />}
                text="북로그 작성하기"
              />
            </>
          ) : (
            <></>
          )}
          {user ? (
            <Button text="로그아웃" onClick={googleSignOut} />
          ) : (
            <Button text="로그인" onClick={googleSignIn} />
          )}
        </nav>
      </div>
    </header>
  );
}
