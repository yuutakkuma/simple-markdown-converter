function convertMarkdownToHtml(markdown: string) {
  // 空文字（改行対応）
  if (markdown === "") {
    return markdown.replace("", "<br>");
  }

  // h1
  const regexpH1 = /^#(?=\s)/;
  if (markdown.match(regexpH1)) {
    return markdown
      .replace(regexpH1, "<h1  class='md md-h-one'>")
      .replace(/$/, "</h1>")
      .replace(/\s/, "");
  }

  // h2
  const regexpH2 = /^##(?=\s)/;
  if (markdown.match(regexpH2)) {
    return markdown
      .replace(regexpH2, "<h2  class='md md-h-two'>")
      .replace(/$/, "</h2>")
      .replace(/\s/, "");
  }

  // h3
  const regexpH3 = /^###(?=\s)/;
  if (markdown.match(regexpH3)) {
    return markdown
      .replace(regexpH3, "<h3  class='md'>")
      .replace(/$/, "</h3>")
      .replace(/\s/, "");
  }

  // section
  const regexpSectionStart = /^::section/;
  if (markdown.match(regexpSectionStart)) {
    return markdown.replace(regexpSectionStart, "<section  class='md'>");
  }
  const regexpSectionEnd = /^::\/section/;
  if (markdown.match(regexpSectionEnd)) {
    return markdown.replace(regexpSectionEnd, "</section>");
  }

  // htmlタグ検知
  const regexpHtml = /[<>]/g;
  if (markdown.match(regexpHtml)) {
    console.warn("< or > はNGです", markdown);

    return "";
  }

  if (markdown) {
    // p
    return markdown.replace(/^/, "<p  class='md'>").replace(/$/, "</p>");
  }
}

export function contentConvert(mdContent: string) {
  let splited = mdContent.split("\n");
  const html = "";

  for (let i = 0; i < splited.length; i += 1) {
    const content = convertMarkdownToHtml(splited[i]);

    if (content || typeof content === "string") {
      splited[i] = content;
    }
  }

  return html.concat(...splited);
}
