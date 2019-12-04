import { FileInfo } from "jscodeshift";

export default function(fileInfo: FileInfo) {
  return fileInfo.source;
}
