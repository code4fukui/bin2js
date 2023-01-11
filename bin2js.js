import { program } from "https://code4fukui.github.io/commander-es/index.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

program
  .version("0.0.1")
  .argument("<bin file>")
  .parse();

//console.log(program.opts());
//console.log(program.processedArgs);

const fn = program.processedArgs[0];
const bin = await Deno.readFile(fn);
const s = Base64.encode(bin);
/*
const src = `import { s2bin } from "./s2bin.js";
export default new Uint8Array(s2bin(${s}));
`;
*/
const src = `const s = atob("${s}");
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;
`;

await Deno.writeTextFile(fn + ".js", src);
