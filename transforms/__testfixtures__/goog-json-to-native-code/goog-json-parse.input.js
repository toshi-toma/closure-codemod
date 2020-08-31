/**
 * goog.json.parse -> `JSON.parse`
 */

// test
const isDef = goog.json.parse("{}");

if (goog.json.parse("{}")) {
  console.log("foo");
} else if (goog.json.parse("{\"bar\": 0}").bar) {
  console.log("bar");
} else {
  console.log("bar");
}

const def = goog.json.parse("{\"bar\": 0}").bar ? "foo" : "bar";

goog.asserts.assert(goog.json.parse("{\"bar\": 0}").bar);
goog.asserts.assert(!goog.json.parse("{\"bar\": 0}").bar || foo !== "bar");

const f = () => {
  return goog.json.parse("{\"bar\": 0}").bar;
};

const o = {
  s: goog.json.parse("{\"bar\": 0}").bar ? "foo" : "",
};

m("method", goog.json.parse("{\"bar\": 0}").bar ? "foo" : "");