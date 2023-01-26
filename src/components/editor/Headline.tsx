import { useEffect } from "react";
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from "@draft-js-plugins/buttons";
import editorStyles from "./editorStyles.module.css";

export const HeadlinesPicker = (props: any) => {
  const onWindowClick = () => {
    props.onOverrideContent(undefined);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", onWindowClick);
    });
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
  return (
    <>
      {buttons.map((Button, i) => (
        <Button key={i} {...props} />
      ))}
    </>
  );
};

export const HeadlinesButton = (props: any) => {
  const handleClick = () => props.onOverrideContent(HeadlinesPicker);
  return (
    <div className={editorStyles.headlineButtonWrapper}>
      <button onClick={handleClick} className={editorStyles.headlineButton}>
        H
      </button>
    </div>
  );
};
