import {
  convertMetadataToObjectFormat,
  extractMetadata,
} from "../converter/metadata";

export function getMetadata(md: string) {
  const extractedMetadata = extractMetadata(md);
  if (!extractedMetadata) {
    return;
  }

  const convertedMetadata = convertMetadataToObjectFormat(extractedMetadata);
  return convertedMetadata;
}
