/**
 * goog.array.lastIndexOf -> `Array.prototype.lastIndexOf`
 */

// test

const beasts = ["ant", "bison", "camel", "duck", "bison"];

goog.array.lastIndexOf(beasts, "bison");
goog.array.lastIndexOf(beasts, "bison", 2);

if (goog.array.lastIndexOf(beasts, "bison") !== -1) {
  console.log("boolean");
} else {
  console.log("bar");
}

const bool = goog.array.lastIndexOf(beasts, "bison") !== -1 ? "foo" : null;

const f = () => {
  return goog.array.lastIndexOf(beasts, "bison") !== -1;
};
