import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useLocation, useNavigate } from "react-router-dom";
import { IGetBookLogProps } from "../api/firebase";
import Button from "../components/ui/Button";

export default function BookLogDetail() {
  const navigate = useNavigate();
  const {
    state,
    state: { content, info },
  }: { state: IGetBookLogProps } = useLocation();

  const contentState = convertFromRaw(JSON.parse(content));
  const editorState = EditorState.createWithContent(contentState);

  return (
    <section className="p-2">
      <p className="mb-10 text-zinc-500">{`> 내 북로그 보기 - ${info.title}`}</p>
      <h1 className="text-center text-2xl my-10 font-bold">{info.title}</h1>
      <div className="relative">
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorState={editorState}
          onChange={() => {}}
          readOnly={true}
          toolbarHidden
        />
        <div className="absolute top-2 right-2 z-10">
          <Button
            text="북로그 수정하기"
            onClick={() => navigate(`/booklog/edit/${info.title}`, { state })}
          />
        </div>
      </div>
    </section>
  );
}
