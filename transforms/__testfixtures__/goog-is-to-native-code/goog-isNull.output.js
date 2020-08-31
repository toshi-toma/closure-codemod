/**
 * goog.isNull -> `val === null`
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
const isNull = n === null;

if (n === null) {
  console.log("null");
} else if (!(foo === null) || n === null) {
  console.log("foo");
} else {
  console.log("bar");
}

if (obj.foo === null) {
  console.log("obj");
} else if (!(obj["foo"] === null) || obj.n["n"] === null) {
  console.log("n");
} else {
  console.log("bar");
}

const isN = n === null ? null : "foo";

goog.asserts.assert(n === null);
goog.asserts.assert(!(n === null) || foo !== "bar");

const f = () => {
  return n === null ? "foo" : "";
};

const o = {
  s: n === null ? "foo" : "",
};

m("method", n === null ? "foo" : "");
