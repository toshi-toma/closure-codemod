/**
 * goog.array.lastIndexOf -> `Array.prototype.lastIndexOf`
 */

// test

const beasts = ["ant", "bison", "camel", "duck", "bison"];

beasts.lastIndexOf("bison");
beasts.lastIndexOf("bison", 2);

if (beasts.lastIndexOf("bison") !== -1) {
  console.log("boolean");
} else {
  console.log("bar");
}

const bool = beasts.lastIndexOf("bison") !== -1 ? "foo" : null;

const f = () => {
  return beasts.lastIndexOf("bison") !== -1;
};
