# bin2js / js2bin
 
- convert a binary file to a js (JavaScript source) file for WASM, images or anything!
- reconvert a js file to a binary file (js2bin)

```sh
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js somefile.bin
$ ls -l somefile.bin.js
```

```JavaScript
import bin from "./somefile.bin.js";
console.log(bin);
```

## example

test.wasm 96byte
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js test.wasm
$ ls -l test.wasm.js
212byte
```

test.wasm.js
```JavaScript
import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(".6h @@@ qm2[-wdn7#dt#`hÁÈ @ @$H¤aPĀ ÚDAÚD0Hx,")
```

to import
```JavaScript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0,  97, 115, 109, ...
```

reconvert to binnary file
```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
96byte
```

## options

### gzip compression

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
213KB
```

### encode by Base64

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --base64 --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
248KB
```

## blog

- https://fukuno.jig.jp/3821
