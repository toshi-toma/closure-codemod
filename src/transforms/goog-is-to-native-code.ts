import { FileInfo, Transform, API, CallExpression } from "jscodeshift";

const deprecatedMethods = [
  "isDef",
  "isNull",
  "isDefAndNotNull",
  "isString",
  "isBoolean",
  "isNumber",
];

const transform: Transform = ({ source }: FileInfo, { jscodeshift }: API) => {
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
        case "isDefAndNotNull":
          return j.binaryExpression("!=", arg, j.identifier("null"));
        case "isString":
          return j.binaryExpression(
            "===",
            j.unaryExpression("typeof", arg),
            j.literal("string")
          );
        case "isBoolean":
          return j.binaryExpression(
            "===",
            j.unaryExpression("typeof", arg),
            j.literal("boolean")
          );
        case "isNumber":
          return j.binaryExpression(
            "===",
            j.unaryExpression("typeof", arg),
            j.literal("number")
          );
      }
    })
    .toSource();
};

export default transform;
