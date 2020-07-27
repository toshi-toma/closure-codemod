import {
  FileInfo,
  Transform,
  API,
  Options,
  CallExpression,
  Identifier,
  MemberExpression,
} from "jscodeshift";

const transform: Transform = (
  { source }: FileInfo,
  { jscodeshift }: API,
  options: Options
) => {
  const j = jscodeshift;
  return j(source)
    .find(CallExpression)
    .filter((path) => {
      const callee = path.get("callee").value;
      return (
        callee.type === "MemberExpression" &&
        callee.object.name === "goog" &&
        callee.property.name === "isDef"
      );
    })
    .replaceWith((path) => {
      const arg = path.node.arguments[0] as any;
      return j.binaryExpression("!==", arg, j.identifier("undefined"));
    })
    .toSource();
};

export default transform;
