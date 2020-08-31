/**
 * goog.isBoolean -> `typeof val === 'boolean'`
 */

// setup
const foo = true;
const n = null;
const obj = {
  foo: "foo",
  n: {
    n: null,
  },
};

// test
const isBoolean = goog.isBoolean(n);

if (goog.isBoolean(foo)) {
  console.log("boolean");
} else if (!goog.isBoolean(foo) || goog.isBoolean(n)) {
  console.log("n");
} else {
  console.log("bar");
}

if (goog.isBoolean(obj.foo)) {
  console.log("obj");
} else if (!goog.isBoolean(obj["foo"]) || goog.isBoolean(obj.n["n"])) {
  console.log("n");
} else {
  console.log("bar");
}

const bool = goog.isBoolean(n) ? "foo" : null;

goog.asserts.assert(goog.isBoolean(n));
goog.asserts.assert(!goog.isBoolean(n) || foo !== "bar");

const f = () => {
  return goog.isBoolean(n) ? "foo" : "";
};

const o = {
  s: goog.isBoolean(n) ? "foo" : "",
};

m("method", goog.isBoolean(n) ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (goog.isBoolean((match = reg.exec(foo)))) {
  console.log("goog.isBoolean", match);
}
