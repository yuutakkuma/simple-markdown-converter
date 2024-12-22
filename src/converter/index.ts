import { contentConvert } from "./content";
import { convertMetadataToObjectFormat, extractMetadata } from "./metadata";

function getMarkdownContentData(md: string) {
  const target = "---";
  const metaStart = md.indexOf(target);
  const metaEnd = md.indexOf(target, metaStart + 1);

  // metadataがなかった場合の対策で条件分岐する
  const sliceStart = metaStart >= 0 ? metaEnd + target.length : 0;
  const content = md.slice(sliceStart);

  const html = contentConvert(content);

  return html;
}

function getMarkdownMetadata(md: string) {
  const extractedMetadata = extractMetadata(md);
  if (!extractedMetadata) {
    return;
  }

  const convertedMetadata = convertMetadataToObjectFormat(extractedMetadata);
  return convertedMetadata;
}

/**
 * @description
 * マークダウン記法をHTMLに変換する。
 *
 * @summary
 * **対応済み記法一覧**
 * ```
 * metadata
 * ---
 * test: hogehoge
 * ---
 *
 * # => h1
 * ## => h2
 * ### => h3
 *
 * ::section => <section>
 * ::/section => </section>
 *
 * text => p
 *
 * 改行 => br
 * ```
 *
 */
export function markdownConverter(md: string) {
  const html = getMarkdownContentData(md);
  const metadata = getMarkdownMetadata(md);

  return { html, metadata };
}
