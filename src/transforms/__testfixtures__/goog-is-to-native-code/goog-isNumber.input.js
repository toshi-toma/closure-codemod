/**
 * goog.isNumber -> `typeof val === 'number'`
 */

// setup
const foo = 0;
const n = null;
const obj = {
  foo: "foo",
  n: {
    n: null,
  },
};

// test
const isNumber = goog.isNumber(n);

if (goog.isNumber(foo)) {
  console.log("number");
} else if (!goog.isNumber(foo) || goog.isNumber(n)) {
  console.log("n");
} else {
  console.log("bar");
}

if (goog.isNumber(obj.foo)) {
  console.log("obj");
} else if (!goog.isNumber(obj["foo"]) || goog.isNumber(obj.n["n"])) {
  console.log("n");
} else {
  console.log("bar");
}

const isNum = goog.isNumber(n) ? "foo" : null;

goog.asserts.assert(goog.isNumber(n));
goog.asserts.assert(!goog.isNumber(n) || foo !== "bar");

const f = () => {
  return goog.isNumber(n) ? "foo" : "";
};

const o = {
  s: goog.isNumber(n) ? "foo" : "",
};

m("method", goog.isNumber(n) ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (goog.isNumber((match = reg.exec(foo)))) {
  console.log("isNumber", match);
}
