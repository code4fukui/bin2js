import { program } from "https://code4fukui.github.io/commander-es/index.js";
import { bin2s } from "./bin2s.js";

program
  .version("0.0.1")
  .argument("<bin file>")
  .parse();

//console.log(program.opts());
//console.log(program.processedArgs);

const fn = program.processedArgs[0];
console.log(fn);
const bin = await Deno.readFile(fn);
const s = bin2s(bin);
/*
const src = `import { s2bin } from "./s2bin.js";
export default new Uint8Array(s2bin(${s}));
`;
*/
const src = `const s = ${s};
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;
`;

await Deno.writeTextFile(fn + ".js", src);
