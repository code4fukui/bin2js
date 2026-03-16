# bin2js / js2bin

バイナリファイルをJavaScriptのソースファイルに変換し、JavaScriptのソースファイルをバイナリファイルに逆変換できるツールです。

## 使い方

バイナリファイルをJavaScriptファイルに変換するには以下のようにします:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js somefile.bin
$ ls -l somefile.bin.js
```

変換したJavaScriptファイルをインポートして使うことができます:

```javascript
import bin from "./somefile.bin.js";
console.log(bin);
```

JavaScriptファイルをバイナリファイルに逆変換するには以下のようにします:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## 例

96バイトのWebAssembly (WASM) ファイルをJavaScriptファイルに変換する例です。

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js test.wasm
$ ls -l test.wasm.js
```

変換後の `test.wasm.js` ファイルの中身は以下のようになっています:

```javascript
import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(".6h @@@ qm2[-wdn7#dt#`hÁÈ @ @$H¤aPĀ ÚDAÚD0Hx,")
```

このファイルをインポートして使うことができます:

```javascript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0, 97, 115, 109, ...]
```

また、JavaScriptファイルをバイナリファイルに逆変換することもできます:

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## オプション

### gzipによる圧縮

721KBの `nodejs-lib-ruby-parser.wasm` ファイルを変換する例です:

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

### Base64でエンコード

721KBの `nodejs-lib-ruby-parser.wasm` ファイルを変換する例です:

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --base64 --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

## ブログ

より詳しい情報は以下のブログ記事をご覧ください:
- https://fukuno.jig.jp/3821