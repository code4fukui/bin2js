import { program } from "https://code4fukui.github.io/commander-es/index.js";
import { Base122 } from "https://code4fukui.github.io/Base122/Base122.js";

program
  .version("0.0.1")
  .argument("<bin file>")
  .parse();

//console.log(program.opts());
//console.log(program.processedArgs);

const fn = program.processedArgs[0];
const bin = await Deno.readFile(fn);
const s = Base122.encodeJS(bin);
/*
const src = `import { s2bin } from "./s2bin.js";
export default new Uint8Array(s2bin(${s}));
`;
*/
const src = `function d(n){const t=[0,10,13,34,38,92];const f=7;let o=[];let c=0;let e=0;function i(n){n<<=1;c|=n>>>e;e+=7;if(e>=8){o.push(c);e-=8;c=n<<7-e&255}}for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>127){let n=o>>>8&7;if(n!=f)i(t[n]);i(o&127)}else{i(o)}}return new Uint8Array(o)};
export default d(${s});`;

await Deno.writeTextFile(fn + ".js", src);
