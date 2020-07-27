/**
 * goog.isDef -> `val !== undefined`
 */

// setup
const foo = "foo";
const bar = "bar";
const obj = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};

// test
const isDef = foo !== undefined;

if (foo !== undefined) {
  console.log("foo");
} else if (!(foo !== undefined) || bar !== undefined) {
  console.log("bar");
} else {
  console.log("bar");
}

if (obj.foo !== undefined) {
  console.log("obj");
} else if (!(obj["bar"] !== undefined) || obj.bar["bar"] !== undefined) {
  console.log("bar");
} else {
  console.log("bar");
}

const def = foo !== undefined ? "foo" : "bar";

goog.asserts.assert(foo !== undefined);
goog.asserts.assert(!(foo !== undefined) || foo !== "bar");

const f = () => {
  return foo !== undefined ? "foo" : "";
};

const o = {
  s: foo !== undefined ? "foo" : "",
};

m("method", foo !== undefined ? "foo" : "");
