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
const isDef = goog.isDef(foo);

if (goog.isDef(foo)) {
  console.log("foo");
} else if (!goog.isDef(foo) || goog.isDef(bar)) {
  console.log("bar");
} else {
  console.log("bar");
}

if (goog.isDef(obj.foo)) {
  console.log("obj");
} else if (!goog.isDef(obj["bar"]) || goog.isDef(obj.bar["bar"])) {
  console.log("bar");
} else {
  console.log("bar");
}

const def = goog.isDef(foo) ? "foo" : "bar";

goog.asserts.assert(!goog.isDef(foo));
goog.asserts.assert(!goog.isDef(foo) || foo !== "bar");

const f = () => {
  return goog.isDef(foo) ? "foo" : "";
};

const o = {
  s: goog.isDef(foo) ? "foo" : "",
};

m("method", goog.isDef(foo) ? "foo" : "");

/**
 * goog.isNull -> `val === null`
 */

/**
 * goog.isDefAndNotNull -> `val != null`
 */

/**
 * goog.isString -> `typeof val === 'string'`
 */

/**
 * goog.isBoolean -> `typeof val === 'boolean'`
 */

/**
 * goog.isNumber -> `typeof val === 'number'`
 */
