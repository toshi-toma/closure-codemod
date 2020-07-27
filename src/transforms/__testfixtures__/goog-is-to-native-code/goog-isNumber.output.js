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
const isNumber = typeof n === "number";

if (typeof foo === "number") {
  console.log("number");
} else if (!(typeof foo === "number") || typeof n === "number") {
  console.log("n");
} else {
  console.log("bar");
}

if (typeof obj.foo === "number") {
  console.log("obj");
} else if (!(typeof obj["foo"] === "number") || typeof obj.n["n"] === "number") {
  console.log("n");
} else {
  console.log("bar");
}

const isNum = typeof n === "number" ? "foo" : null;

goog.asserts.assert(typeof n === "number");
goog.asserts.assert(!(typeof n === "number") || foo !== "bar");

const f = () => {
  return typeof n === "number" ? "foo" : "";
};

const o = {
  s: typeof n === "number" ? "foo" : "",
};

m("method", typeof n === "number" ? "foo" : "");

const reg = /\{([0-9]+)\}/g;
while (typeof (match = reg.exec(foo)) === "number") {
  console.log("isNumber", match);
}
