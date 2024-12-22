import {
  convertMetadataToObjectFormat,
  extractMetadata,
} from "../converter/metadata";

export function getMarkdownMetadata(md: string) {
  const extractedMetadata = extractMetadata(md);
  if (!extractedMetadata) {
    return;
  }

  const convertedMetadata = convertMetadataToObjectFormat(extractedMetadata);
  return convertedMetadata;
}
