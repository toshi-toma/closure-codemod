import { API, FileInfo, CallExpression, Transform } from "jscodeshift";
import { JSCodeshift, Literal } from "jscodeshift/src/core";

const replaceableMethods = ["indexOf"];

/**
 * @param source
 * @param jscodeshift
 * @param options: quotes 'single' or 'double' (default: double)
 */
const transform: Transform = ({ source }: FileInfo, { jscodeshift }: API) => {
  const j: JSCodeshift = jscodeshift;
  return j(source)
    .find(CallExpression)
    .filter((path) => {
      const callee = path.get("callee").value;
      return (
        callee.type === "MemberExpression" &&
        callee.object &&
        callee.object.object &&
        callee.object.object.name === "goog" &&
        callee.object.property.name === "array" &&
        replaceableMethods.includes(callee.property.name)
      );
    })
    .replaceWith((path) => {
      const callee = path.get("callee").value;
      switch (callee.property.name) {
        case "indexOf":
          const targetArray = path.node.arguments[0] as any;
          const searchElement = path.node.arguments[1] as any;
          const optFromIndex = path.node.arguments[2] as any;
          return j.callExpression(
            j.memberExpression(targetArray, j.identifier("indexOf")),
            optFromIndex === undefined
              ? [searchElement]
              : [searchElement, optFromIndex]
          );
      }
    })
    .toSource();
};

export default transform;
