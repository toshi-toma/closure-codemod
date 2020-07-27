const { defineTest } = require("jscodeshift/dist/testUtils");

defineTest(__dirname, "goog-provide-to-goog-module");
defineTest(__dirname, "goog-is-to-native-code");