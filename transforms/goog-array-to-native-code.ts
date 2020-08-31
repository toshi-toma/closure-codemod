import { API, FileInfo, CallExpression, Transform } from "jscodeshift";
import { JSCodeshift } from "jscodeshift/src/core";

const replaceabledMethods = ["indexOf"];

/**
 * @param source
 * @param jscodeshift
 * @param options: quotes 'single' or 'double' (default: double)
 */
const transform: Transform = ({ source }: FileInfo, { jscodeshift }: API) => {
  const j: JSCodeshift = jscodeshift;
  return j(source).find(CallExpression).toSource();
};

export default transform;
