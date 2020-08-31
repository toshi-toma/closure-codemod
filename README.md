[![npm version][npm-image]][npm-url]
![Test](https://github.com/toshi-toma/closure-codemod/workflows/Test/badge.svg?branch=master)
![License][license]

# closure-codemod

Closure Libray codemod scripts

## Setup & Run

```
$ npm install -D jscodeshift @toshi-toma/closure-codemod
$ jscodeshift -t node_modules/@toshi-toma/closure-codemod/transforms/<codemod-script-name>.ts <file or directory>
```

You can use the `-d` option for a dry-run and use `-p` to print the output for comparison.

```
$ jscodeshift -t node_modules/@toshi-toma/closure-codemod/transforms/<codemod-script-name>.ts <file or directory> -d -p
```

## Included Scripts

### `goog-is-to-native-code`

```
$ jscodeshift -t node_modules/@toshi-toma/closure-codemod/transforms/goog-is-to-native-code.ts <file or directory>
```

> Delete goog.is(Def|Null|DefAndNotNull|String|Boolean|Number) from base.js.  
https://github.com/google/closure-library/releases/tag/v20200204

[npm-image]: https://img.shields.io/npm/v/@toshi-toma/closure-codemod.svg
[npm-url]: https://npmjs.org/package/@toshi-toma/closure-codemod
[license]: https://img.shields.io/npm/l/@toshi-toma/closure-codemod.svg
