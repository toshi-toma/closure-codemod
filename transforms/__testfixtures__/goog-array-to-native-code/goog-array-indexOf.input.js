/**
 * goog.array.indexOf -> `Array.prototype.indexOf`
 */

// test

const beasts = ["ant", "bison", "camel", "duck", "bison"];

goog.array.indexOf(beasts, "bison");
goog.array.indexOf(beasts, "bison", 2);

if (goog.array.indexOf(beasts, "bison") !== -1) {
  console.log("boolean");
} else {
  console.log("bar");
}

const bool = goog.array.indexOf(beasts, "bison") !== -1 ? "foo" : null;

const f = () => {
  return goog.array.indexOf(beasts, "bison") !== -1;
};
