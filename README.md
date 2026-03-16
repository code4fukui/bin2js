# bin2js / js2bin

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project allows you to convert a binary file to a JavaScript source file and vice versa. It can be used for various purposes, such as embedding WASM, images, or other binary data directly in your JavaScript code.

## Usage

To convert a binary file to a JavaScript file:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js somefile.bin
$ ls -l somefile.bin.js
```

Then, you can import the binary data in your JavaScript code:

```JavaScript
import bin from "./somefile.bin.js";
console.log(bin);
```

To convert the JavaScript file back to the original binary file:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## Example

Let's convert a 96-byte WebAssembly (WASM) file to a JavaScript file:

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js test.wasm
$ ls -l test.wasm.js
```

The resulting `test.wasm.js` file looks like this:

```JavaScript
import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(".6h @@@ qm2[-wdn7#dt#`hÁÈ @ @$H¤aPĀ ÚDAÚD0Hx,")
```

To import the binary data in your JavaScript code:

```JavaScript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0, 97, 115, 109, ...]
```

You can also convert the JavaScript file back to the original binary file:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## Options

### Gzip compression

You can compress the binary data using Gzip before encoding it in the JavaScript file:

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

### Base64 encoding

Alternatively, you can encode the binary data using Base64 instead of the default Base128 encoding:

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --base64 --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

## License
MIT License — see [LICENSE](LICENSE).