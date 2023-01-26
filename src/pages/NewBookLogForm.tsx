import { useLocation } from "react-router-dom";
import TextEditor from "../components/editor/TextEditor";

import Button from "../components/ui/Button";
import { ISearchBookItemInfo } from "../types";

export default function NewBookLogForm() {
  const { state }: { state: ISearchBookItemInfo } = useLocation();
  console.log(state);

  return (
    <main className="p-2">
      <p className="mb-10 text-zinc-500">{`> 새 북로그 작성하기`}</p>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="w-1/5">
          <img
            src={
              state.thumbnail === "" ? "/images/no-image.png" : state.thumbnail
            }
            alt={state.title}
            className="basis-[150px] object-contain w-full h-full"
          />
        </div>
        <aside className="w-4/5 mt-4 flex flex-col md:w-2/3 md:ml-6 md:mt-0">
          <h1 className="text-2xl font-bold">{state.title}</h1>
          <div className="text-sm text-zinc-600">
            저자 : {state.authors.join(", ")} /
            <span className="text-xs">{state.publisher}</span>
          </div>
          <p className="my-4">{state.contents}..(중략)</p>
          <div>ISBN: {state.isbn}</div>

          <a
            href={state.url}
            target="_blank"
            className="cursor-pointer text-indigo-600 font-bold"
          >
            책 더 알아보기
          </a>
        </aside>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col">
        <h5 className="text-xl font-bold mb-4">
          기록을 통해 더욱 풍부한 독서활동을 경험해보세요 📚
        </h5>
        <TextEditor />
        <Button text="내 독서기록 저장하기" />
      </section>
    </main>
  );
}
