export const s2bin = (s) => {
  /*
  const bin = new Uint8Array(s.length);
  for (let i = 0; i < bin.length; i++) {
    bin[i] = s.charCodeAt(i);
  }
  return bin;
  */
  const bin = new Uint8Array(s.length);
  bin.forEach((_, i) => bin[i] = s.charCodeAt(i));
  return bin;
};
