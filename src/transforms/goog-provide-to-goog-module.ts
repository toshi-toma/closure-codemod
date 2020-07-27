import { FileInfo, Transform, API, Options } from "jscodeshift";

// TODO: WIP
const transform: Transform = (file: FileInfo, api: API, options: Options) => {
  return file.source;
};

export default transform;
