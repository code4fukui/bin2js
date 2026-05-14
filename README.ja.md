# bin2js / js2bin

このプロジェクトは、バイナリファイルをJavaScriptソースファイルに変換したり、その逆の変換を行ったりするためのツールです。WASMや画像、その他のバイナリデータをJavaScriptコードに直接埋め込むなど、さまざまな目的で利用できます。

## 使い方

バイナリファイルをJavaScriptファイルに変換するには：

```sh
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js somefile.bin
$ ls -l somefile.bin.js
```

変換後、JavaScriptコード内でバイナリデータをインポートできます：

```JavaScript
import bin from "./somefile.bin.js";
console.log(bin);
```

JavaScriptファイルを元のバイナリファイルに戻すには：

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## 例

96バイトのWebAssembly（WASM）ファイルをJavaScriptファイルに変換してみましょう：

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js test.wasm
$ ls -l test.wasm.js
```

生成された `test.wasm.js` ファイルは以下のようになります：

```JavaScript
import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(".6h @@@ qm2[-wdn7#dt#`hÁÈ @ @$H¤aPĀ ÚDAÚD0Hx,")
```

JavaScriptコード内でバイナリデータをインポートするには：

```JavaScript
import bin from "./test.wasm.js";
console.log(bin); // Uint8Array(96) [0, 97, 115, 109, ...]
```

JavaScriptファイルを元のバイナリファイルに戻すこともできます：

```sh
$ deno run -A https://code4fukui.github.io/bin2js/js2bin.js test.wasm.js
$ ls -l test.wasm
```

## オプション

### Gzip圧縮

JavaScriptファイルとしてエンコードする前に、バイナリデータをGzipで圧縮できます：

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

### Base64エンコード

デフォルトのBase128エンコードの代わりに、Base64を使用してバイナリデータをエンコードすることもできます：

```sh
$ cd example
$ deno run -A https://code4fukui.github.io/bin2js/bin2js.js nodejs-lib-ruby-parser.wasm --base64 --gzip
$ ls -l nodejs-lib-ruby-parser.wasm.js
```

## ライセンス
MIT License — [LICENSE](LICENSE)を参照してください。
