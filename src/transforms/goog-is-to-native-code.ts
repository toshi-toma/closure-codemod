import {
  FileInfo,
  Transform,
  API,
  Options,
  CallExpression,
  Identifier,
  MemberExpression,
} from "jscodeshift";

const deprecatedMethods = ["isDef", "isNull"];

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
        deprecatedMethods.includes(callee.property.name)
      );
    })
    .replaceWith((path) => {
      const callee = path.get("callee").value;
      const arg = path.node.arguments[0] as any;
      switch (callee.property.name) {
        case "isDef":
          return j.binaryExpression("!==", arg, j.identifier("undefined"));
        case "isNull":
          return j.binaryExpression("===", arg, j.identifier("null"));
      }
    })
    .toSource();
};

export default transform;
