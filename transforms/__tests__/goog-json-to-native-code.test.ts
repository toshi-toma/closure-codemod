// @ts-ignore
import { defineTest } from "jscodeshift/dist/testUtils";

const tests = ["goog-json-parse"];

describe("goog-json-to-native-code", () => {
  tests.forEach((test) =>
    defineTest(
      __dirname,
      "goog-json-to-native-code",
      null,
      `goog-json-to-native-code/${test}`
    )
  );
});
