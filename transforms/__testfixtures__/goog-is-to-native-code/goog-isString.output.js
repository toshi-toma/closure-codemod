/**
 * goog.isString -> `typeof val === 'string'`
 */

// setup
const foo = "foo";
const n = null;
const obj = {
  foo: "foo",
  n: {
    n: null,
  },
};

// test
const isString = typeof n === "string";

if (typeof foo === "string") {
  console.log("string");
} else if (!(typeof foo === "string") || typeof n === "string") {
  console.log("n");
} else {
  console.log("bar");
}

if (typeof obj.foo === "string") {
  console.log("obj");
} else if (!(typeof obj["foo"] === "string") || typeof obj.n["n"] === "string") {
  console.log("n");
} else {
  console.log("bar");
}

const isStringOrNull = typeof n === "string" ? "foo" : null;

goog.asserts.assert(typeof n === "string");
goog.asserts.assert(!(typeof n === "string") || foo !== "bar");

const f = () => {
  return typeof n === "string" ? "foo" : "";
};

const o = {
  s: typeof n === "string" ? "foo" : "",
};

m("method", typeof n === "string" ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (typeof (match = reg.exec(foo)) === "string") {
  console.log("isString", match);
}
