import wasmbin from "./test.wasm.js";
//const wasmbin = new Uint8Array();
console.log(wasmbin);

export const importWASM = async (bin, imports = {}) => {
  const module = new WebAssembly.Module(bin);
  //const mem = new WebAssembly.Memory({ initial: 1 });
  const instance = new WebAssembly.Instance(module, imports);
  return instance.exports;
};

const wasm = await importWASM(wasmbin);
console.log(wasm._start());
