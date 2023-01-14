import { program } from "https://code4fukui.github.io/commander-es/index.js";

program
  .version("0.0.1")
  .argument("<*.*.js file>")
  .parse();

const fn = program.processedArgs[0];
const outfn = fn.substring(0, fn.length - 3);
const n = outfn.lastIndexOf(".");
if (n < 0) {
  console.log("is not *.*.js file");
  Deno.exit(1);
}
const bin = (await import(Deno.cwd() + "/" + fn + "?ignoecache" + Math.random())).default;
await Deno.writeFile(outfn, bin);
