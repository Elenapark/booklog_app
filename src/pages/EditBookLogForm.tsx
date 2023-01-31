import { FormEvent, useEffect, useState } from "react";
import { EditorState, RichUtils, ContentState, convertFromRaw } from "draft-js";
import { useLocation } from "react-router-dom";
import TextEditor from "../components/editor/TextEditor";
import Button from "../components/ui/Button";
import useBookLog from "../hooks/useBookLog";

export default function EditBookLogForm() {
  const {
    booklogMutation: { mutate, isLoading, error },
  } = useBookLog();

  const {
    state: { content, info },
  } = useLocation();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contentState: ContentState = editorState.getCurrentContent();

    try {
      mutate(
        {
          info,
          content: contentState,
        },
        {
          onSuccess: () => alert("북로그가 성공적으로 저장되었습니다."),
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  // persist
  useEffect(() => {
    if (content) {
      setEditorState(() =>
        EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      );
    }
  }, [content]);

  return (
    <section className="p-2">
      <p className="mb-10 text-zinc-500">{`> 북로그 작성하기`}</p>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="w-1/5">
          <img
            src={
              info.thumbnail === "" ? "/images/no-image.png" : info.thumbnail
            }
            alt={info.title}
            className="basis-[150px] object-contain w-full h-full"
          />
        </div>
        <aside className="w-4/5 mt-4 flex flex-col md:w-2/3 md:ml-6 md:mt-0">
          <h1 className="text-2xl font-bold">{info.title}</h1>
          <div className="text-sm text-zinc-600">
            저자 : {info.authors.join(", ")} /
            <span className="text-xs">{info.publisher}</span>
          </div>
          <p className="my-4">{info.contents}..(중략)</p>
          <div>ISBN: {info.isbn}</div>

          <a
            href={info.url}
            target="_blank"
            className="cursor-pointer text-indigo-600 font-bold"
          >
            책 더 알아보기
          </a>
        </aside>
      </section>
      <hr className="my-10" />
      <section className="flex flex-col relative">
        <h5 className="text-xl font-bold mb-4">
          기록을 통해 더욱 풍부한 독서활동을 경험해보세요 📚
        </h5>
        <form onSubmit={onSave} className="flex flex-col ">
          <TextEditor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
          />
          <div className="absolute top-1 right-1">
            <Button
              disabled={isLoading}
              type="submit"
              text={isLoading ? "북로그 저장중..." : "내 북로그 저장하기"}
            />
          </div>
        </form>
      </section>
      <>{error && <p>북로그 저장에 문제가 생겼습니다.</p>}</>
    </section>
  );
}
