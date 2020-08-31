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
const isString = goog.isString(n);

if (goog.isString(foo)) {
  console.log("string");
} else if (!goog.isString(foo) || goog.isString(n)) {
  console.log("n");
} else {
  console.log("bar");
}

if (goog.isString(obj.foo)) {
  console.log("obj");
} else if (!goog.isString(obj["foo"]) || goog.isString(obj.n["n"])) {
  console.log("n");
} else {
  console.log("bar");
}

const isStringOrNull = goog.isString(n) ? "foo" : null;

goog.asserts.assert(goog.isString(n));
goog.asserts.assert(!goog.isString(n) || foo !== "bar");

const f = () => {
  return goog.isString(n) ? "foo" : "";
};

const o = {
  s: goog.isString(n) ? "foo" : "",
};

m("method", goog.isString(n) ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (goog.isString((match = reg.exec(foo)))) {
  console.log("isString", match);
}
