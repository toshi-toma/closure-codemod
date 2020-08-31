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
const isNull = goog.isNull(n);

if (goog.isNull(n)) {
  console.log("null");
} else if (!goog.isNull(foo) || goog.isNull(n)) {
  console.log("foo");
} else {
  console.log("bar");
}

if (goog.isNull(obj.foo)) {
  console.log("obj");
} else if (!goog.isNull(obj["foo"]) || goog.isNull(obj.n["n"])) {
  console.log("n");
} else {
  console.log("bar");
}

const isN = goog.isNull(n) ? null : "foo";

goog.asserts.assert(goog.isNull(n));
goog.asserts.assert(!goog.isNull(n) || foo !== "bar");

const f = () => {
  return goog.isNull(n) ? "foo" : "";
};

const o = {
  s: goog.isNull(n) ? "foo" : "",
};

m("method", goog.isNull(n) ? "foo" : "");
