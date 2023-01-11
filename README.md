# bin2js
 
- convert a binary file to a js (JavaScript source) file.
- for WASM, images or anything!

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
247byte
```

test.wasm.js
```JavaScript
const s = atob("AGFzbQEAAAABBAFgAAADAgEABQMBAAEHEwIGbWVtb3J5AgAGX3N0YXJ0AAAKMgEwAQJ/QQAhAEEBIQECQANAQQEgAUHkAEhrDQEgACABaiEAIAFBAWohAQwACwsgAA8L");
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;
```

to import
```JavaScript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0,  97, 115, 109, ...
```

## options

### gzip compression

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
248KB
```

### encode by Base122

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip --base122
$ ls -l nodejs-lib-ruby-parser.wasm.js
216KB
```

## blog

- https://fukuno.jig.jp/3821
