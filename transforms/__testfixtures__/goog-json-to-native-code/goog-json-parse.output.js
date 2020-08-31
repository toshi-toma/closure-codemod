/**
 * goog.json.parse -> `JSON.parse`
 */

// test
const isDef = JSON.parse("{}");

if (JSON.parse("{}")) {
  console.log("foo");
} else if (JSON.parse("{\"bar\": 0}").bar) {
  console.log("bar");
} else {
  console.log("bar");
}

const def = JSON.parse("{\"bar\": 0}").bar ? "foo" : "bar";

goog.asserts.assert(JSON.parse("{\"bar\": 0}").bar);
goog.asserts.assert(!JSON.parse("{\"bar\": 0}").bar || foo !== "bar");

const f = () => {
  return JSON.parse("{\"bar\": 0}").bar;
};

const o = {
  s: JSON.parse("{\"bar\": 0}").bar ? "foo" : "",
};

m("method", JSON.parse("{\"bar\": 0}").bar ? "foo" : "");