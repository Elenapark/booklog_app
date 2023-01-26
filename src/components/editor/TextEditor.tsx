import { useEffect, useState } from "react";
import { EditorState, RichUtils } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createToolbarPlugin from "@draft-js-plugins/static-toolbar";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from "@draft-js-plugins/buttons";

import "draft-js/dist/Draft.css";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";
import editorStyles from "./editorStyles.module.css";
import { HeadlinesButton } from "./Headline";
import { convertToHTML } from "draft-convert";

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

export default function TextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState<string | null>(null);

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  console.log(convertedContent);

  return (
    <div className="mt-2 relative">
      <div className="sticky top-0 left-0">
        <Toolbar>
          {(externalProps) => (
            <>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <HeadlinesButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
            </>
          )}
        </Toolbar>
      </div>
      <div className={editorStyles.editor}>
        <Editor
          editorState={editorState}
          plugins={plugins}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder=""
          spellCheck
        />
      </div>
    </div>
  );
}
