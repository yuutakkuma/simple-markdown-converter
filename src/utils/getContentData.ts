import { converter } from "../converter/content";

export function getContentData(md: string) {
  const target = "---";
  const metaStart = md.indexOf(target);
  const metaEnd = md.indexOf(target, metaStart + 1);

  // metadataがなかった場合の対策で条件分岐する
  const sliceStart = metaStart >= 0 ? metaEnd + target.length : 0;
  const content = md.slice(sliceStart);

  const html = converter(content);

  return html;
}
