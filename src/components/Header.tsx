import { Link } from "react-router-dom";
import {
  FcReading,
  FcList,
  FcIdea,
  FcLike,
  FcAddDatabase,
} from "react-icons/fc";
import CustomLink from "./CustomLink";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="border-b flex justify-between p-2">
      <div className="flex items-center cursor-pointer">
        <FcReading />
        <span>북로그</span>
      </div>
      <nav className="flex items-center gap-2">
        <CustomLink
          goTo="/books/recommended"
          icon={<FcIdea />}
          text="추천도서"
        />
        <CustomLink
          goTo="/books/wishlist"
          icon={<FcLike />}
          text="위시리스트"
        />
        <CustomLink goTo="/booklog" icon={<FcList />} text="나의 북로그" />
        <CustomLink
          goTo="/booklog/new"
          icon={<FcAddDatabase />}
          text="북로그 작성하기"
        />

        <Button text="로그인" />
      </nav>
    </header>
  );
}
