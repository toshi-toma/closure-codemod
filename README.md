![Test](https://github.com/toshi-toma/closure-codemod/workflows/Test/badge.svg?branch=master)

# closure-codemod

Status: **_WIP_**

Closure Libray codemod scripts

## Setup & Run

```
$ npm install -D jscodeshift
$ git clone git@github.com:toshi-toma/closure-codemod.git
$ npx jscodeshift -t closure-codemod/lib/transforms<codemod-script> <file>
```

You can use the `-d` option for a dry-run and use `-p` to print the output for comparison.

## Included Scripts

### `goog-is-to-native-code`

```
jscodeshift -t closure-codemod/lib/transforms/goog-is-to-native-code.js <file>
```

> Delete goog.is(Def|Null|DefAndNotNull|String|Boolean|Number) from base.js.  
https://github.com/google/closure-library/releases/tag/v20200204

