/**
 * goog.array.indexOf -> `Array.prototype.indexOf`
 */

// test

const beasts = ["ant", "bison", "camel", "duck", "bison"];

beasts.indexOf("bison");
beasts.indexOf("bison", 2);

if (beasts.indexOf("bison") !== -1) {
  console.log("boolean");
} else {
  console.log("bar");
}

const bool = beasts.indexOf("bison") !== -1 ? "foo" : null;

const f = () => {
  return beasts.indexOf("bison") !== -1;
};
