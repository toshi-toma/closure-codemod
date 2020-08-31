/**
 * goog.isDefAndNotNull -> `val != null`
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
const isDefAndNotNull = goog.isDefAndNotNull(n);

if (goog.isDefAndNotNull(n)) {
  console.log("null");
} else if (!goog.isDefAndNotNull(foo) || goog.isDefAndNotNull(n)) {
  console.log("foo");
} else {
  console.log("bar");
}

if (goog.isDefAndNotNull(obj.foo)) {
  console.log("obj");
} else if (!goog.isDefAndNotNull(obj["foo"]) || goog.isDefAndNotNull(obj.n["n"])) {
  console.log("n");
} else {
  console.log("bar");
}

const isN = goog.isDefAndNotNull(n) ? null : "foo";

goog.asserts.assert(goog.isDefAndNotNull(n));
goog.asserts.assert(!goog.isDefAndNotNull(n) || foo !== "bar");

const f = () => {
  return goog.isDefAndNotNull(n) ? "foo" : "";
};

const o = {
  s: goog.isDefAndNotNull(n) ? "foo" : "",
};

m("method", goog.isDefAndNotNull(n) ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (goog.isDefAndNotNull((match = reg.exec(foo)))) {
  console.log("isDefAndNotNull", match);
}
