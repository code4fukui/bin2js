import { program } from "https://code4fukui.github.io/commander-es/index.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";
import { Base122 } from "https://code4fukui.github.io/Base122/Base122.js";
import { Base128 } from "https://code4fukui.github.io/Base128/Base128.js";
import { gzip } from "https://taisukef.github.io/zlib.js/es/gzip.js";
//import { rawdeflate } from "https://taisukef.github.io/zlib.js/es/rawdeflate.js";
//import { deflate } from "https://taisukef.github.io/zlib.js/es/deflate.js";

program
  .version("0.0.1")
  .argument("<bin file>")
  .option("--base64", "encode by Base64")
  .option("--base122", "encode by Base122")
  .option("--base128", "encode by Base128 (default)")
  .option("--gzip", "gzip before encode")
  .option("--raw", "no compress before encode (default)")
  .parse();

const opts = program.opts();
const base64 = opts.base64;
const base122 = opts.base122;
const base128 = opts.base128 || (!opts.base64 && !opts.base122);
const flggzip = opts.gzip && !opts.raw;
const fn = program.processedArgs[0];
const bin = await Deno.readFile(fn);

const convert = (bin) => {
  if (base64) {
    if (!flggzip) {
      return `const s = atob("${Base64.encode(bin)}");
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;
`;
    } else {
      return `import { gunzip } from "https://taisukef.github.io/zlib.js/es/gunzip.js";
const s = atob("${Base64.encode(gzip(bin))}");
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default gunzip(b);
`;
    }
  } else if (base122) {
    if (!flggzip) {
      return `function d(n){const t=[0,10,13,34,38,92];const f=7;let o=[];let c=0;let e=0;function i(n){n<<=1;c|=n>>>e;e+=7;if(e>=8){o.push(c);e-=8;c=n<<7-e&255}}for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>127){let n=o>>>8&7;if(n!=f)i(t[n]);i(o&127)}else{i(o)}}return new Uint8Array(o)};
export default d(${Base122.encodeJS(bin)});`;
    } else {
      return `import{gunzip}from"https://taisukef.github.io/zlib.js/es/gunzip.js"
function d(n){const t=[0,10,13,34,38,92];const f=7;let o=[];let c=0;let e=0;function i(n){n<<=1;c|=n>>>e;e+=7;if(e>=8){o.push(c);e-=8;c=n<<7-e&255}}for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>127){let n=o>>>8&7;if(n!=f)i(t[n]);i(o&127)}else{i(o)}}return new Uint8Array(o)}
export default gunzip(d(${Base122.encodeJS(gzip(bin))}))`;
    }
  } else if (base128) {
    if (!flggzip) {
      return `import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
export default Base128.decode(${Base128.encodeJS(bin)})`;
    } else {
      return `import{Base128}from"https://code4fukui.github.io/Base128/Base128.js"
import{gunzip}from"https://taisukef.github.io/zlib.js/es/gunzip.js"
export default gunzip(Base128.decode(${Base128.encodeJS(gzip(bin))}))`;
    }
  }
};

const src = convert(bin);

await Deno.writeTextFile(fn + ".js", src);
