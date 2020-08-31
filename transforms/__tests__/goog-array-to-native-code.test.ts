// @ts-ignore
import { defineTest } from "jscodeshift/dist/testUtils";

const tests = ["goog-array-indexOf", "goog-array-lastIndexOf"];

describe("goog-array-to-native-code", () => {
  tests.forEach((test) =>
    defineTest(
      __dirname,
      "goog-array-to-native-code",
      null,
      `goog-array-to-native-code/${test}`
    )
  );
});
