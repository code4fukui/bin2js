# bin2js / js2bin

- バイナリファイルをJavaScriptのソースファイルに変換できる
- JavaScriptのソースファイルをバイナリファイルに逆変換できる (js2bin)

```sh
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js somefile.bin
$ ls -l somefile.bin.js
```

```JavaScript
import bin from "./somefile.bin.js";
console.log(bin);
```

## 例

test.wasm 96バイト
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js test.wasm
$ ls -l test.wasm.js
212バイト
```

test.wasm.js
```JavaScript
import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(".6h @@@ qm2[-wdn7#dt#`hÁÈ @ @$H¤aPĀ ÚDAÚD0Hx,")
```

インポート
```JavaScript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0,  97, 115, 109, ...
```

バイナリファイルに戻す
```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
96バイト
```

## オプション

### gzipによる圧縮

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
213KB
```

### Base64でエンコード

nodejs-lib-ruby-parser.wasm 721KB
```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --base64 --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
248KB
```

## ブログ

- https://fukuno.jig.jp/3821