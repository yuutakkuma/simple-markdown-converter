import "./MarkdownPreview.css";
import { useAtomValue } from "jotai";
// atoms
import { markdownAtom } from "../atoms/markdownAtom";
// utils
import { getMarkdownMetadata } from "../utils/getMarkdownMetadata";
import { getMarkdownContentData } from "../utils/getMarkdownContentData";

export function MarkdownPreview() {
  const markdown = useAtomValue(markdownAtom);

  const metadata = getMarkdownMetadata(markdown);
  const html = getMarkdownContentData(markdown);

  return (
    <div className="md-preview-container">
      {metadata && (
        <div className="md-preview-metadata">
          <b>metadata</b>
          <div>{JSON.stringify(metadata, null, 2)}</div>
        </div>
      )}
      <div
        className="md-preview-el"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
