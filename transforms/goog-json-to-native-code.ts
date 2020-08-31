import { API, FileInfo, CallExpression, Transform } from "jscodeshift";
import { JSCodeshift, Literal } from "jscodeshift/src/core";

const detectQuoteStyle = (options: { quotes?: string }) => {
  if (!options.quotes) {
    return "double";
  }
  if (options.quotes === "single" || options.quotes === "double") {
    return options.quotes;
  }
  return "double";
};

const deprecatedMethods = ["parse"];

/**
 * @param source
 * @param jscodeshift
 * @param options: quotes 'single' or 'double' (default: double)
 */
const transform: Transform = (
  { source }: FileInfo,
  { jscodeshift }: API,
  options
) => {
  const j: JSCodeshift = jscodeshift;
  const quoteStyle = detectQuoteStyle(options);
  console.log(options);
  console.log(quoteStyle);
  return j(source)
    .find(CallExpression)
    .filter((path) => {
      const callee = path.get("callee").value;
      if (callee.object && callee.object.object) {
        return (
          callee.type === "MemberExpression" &&
          callee.object &&
          callee.object.object &&
          callee.object.object.name === "goog" &&
          callee.object.property.name === "json" &&
          deprecatedMethods.includes(callee.property.name)
        );
      }
      return false;
    })
    .replaceWith((path) => {
      const callee = path.get("callee").value;
      switch (callee.property.name) {
        case "parse":
          const arg = path.node.arguments[0] as Literal;
          return j.callExpression(
            j.memberExpression(j.identifier("JSON"), j.identifier("parse")),
            [j.literal(arg.value)]
          );
      }
    })
    .toSource({ quote: quoteStyle });
};

export default transform;
