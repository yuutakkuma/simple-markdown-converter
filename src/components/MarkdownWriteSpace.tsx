import "./MarkdownWriteSpace.css";
import { ChangeEvent } from "react";
import { useSetAtom } from "jotai";
// atoms
import { markdownAtom } from "../atoms/markdownAtom";

export function MarkdownWriteSpace() {
  const setMarkdown = useSetAtom(markdownAtom);

  const markdownChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <textarea
      className="md-write-space"
      placeholder="markdownで書いてください"
      autoComplete="off"
      autoCapitalize="off"
      rows={30}
      onChange={markdownChange}
    />
  );
}
