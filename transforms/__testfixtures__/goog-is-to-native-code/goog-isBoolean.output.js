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
const isBoolean = typeof n === "boolean";

if (typeof foo === "boolean") {
  console.log("boolean");
} else if (!(typeof foo === "boolean") || typeof n === "boolean") {
  console.log("n");
} else {
  console.log("bar");
}

if (typeof obj.foo === "boolean") {
  console.log("obj");
} else if (!(typeof obj["foo"] === "boolean") || typeof obj.n["n"] === "boolean") {
  console.log("n");
} else {
  console.log("bar");
}

const bool = typeof n === "boolean" ? "foo" : null;

goog.asserts.assert(typeof n === "boolean");
goog.asserts.assert(!(typeof n === "boolean") || foo !== "bar");

const f = () => {
  return typeof n === "boolean" ? "foo" : "";
};

const o = {
  s: typeof n === "boolean" ? "foo" : "",
};

m("method", typeof n === "boolean" ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (typeof (match = reg.exec(foo)) === "boolean") {
  console.log("goog.isBoolean", match);
}
