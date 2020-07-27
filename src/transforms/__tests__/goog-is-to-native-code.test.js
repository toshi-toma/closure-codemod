const tests = ["goog-isDef", "goog-isNull"];

const defineTest = require("jscodeshift/dist/testUtils").defineTest;

describe("goog-is-to-native-code", () => {
  tests.forEach((test) =>
    defineTest(
      __dirname,
      "goog-is-to-native-code",
      null,
      `goog-is-to-native-code/${test}`
    )
  );
});
