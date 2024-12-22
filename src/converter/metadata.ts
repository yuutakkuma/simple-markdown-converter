export function extractMetadata(md: string) {
  const target = "---";
  const splited = md.split("\n");
  const indexOfFirst = splited.indexOf(target);
  const indexOfSecond = splited.indexOf(target, indexOfFirst + 1);

  // metadataが無い場合の対応
  if (indexOfFirst < 0 || indexOfSecond < 0) {
    return;
  }

  const metaData = splited.slice(indexOfFirst + 1, indexOfSecond);

  return metaData;
}

export function convertMetadataToObjectFormat(metadata: string[]) {
  // メタデータをオブジェクト形式に変換する
  let metadataObject: { [key: string]: string | string[] } = {};
  for (let i = 0; i < metadata.length; ++i) {
    const colon = metadata[i].indexOf(":");
    const key = metadata[i].slice(0, colon);
    const value = metadata[i].slice(colon + 1).trim();

    // メタデータに配列が存在した場合、文字列から配列に変換する
    if (value.match(/^(?=.*\[)(?=.*\])/)) {
      const array = value
        .replace(/\[/, "")
        .replace(/\]/, "")
        .replaceAll(",", "")
        .split(" ");
      metadataObject[key] = array;
    } else {
      // 配列以外のデータは文字列で保存
      metadataObject[key] = value;
    }
  }

  return metadataObject;
}
