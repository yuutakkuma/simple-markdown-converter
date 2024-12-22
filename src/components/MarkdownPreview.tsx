import "./MarkdownPreview.css";
import { useAtomValue } from "jotai";
// atoms
import { markdownAtom } from "../atoms/markdownAtom";
// converter
import { markdownConverter } from "../converter";

export function MarkdownPreview() {
  const markdown = useAtomValue(markdownAtom);

  const { metadata, html } = markdownConverter(markdown);

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
