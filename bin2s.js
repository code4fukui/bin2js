export const bin2s = (bin) => {
  const s = [];
  for (const b of bin) {
    if (b < 0x0) {
      s.push("\\x0" + b);
    } else if (b < 0x10) {
      s.push("\\x0" + b.toString(16));
    } else if (b == 34) {
      s.push("\\\"");
    } else if (b == 92) {
      s.push("\\\\");
    } else if (b < 0x20 || b >= 0x7f) {
      s.push("\\x" + b.toString(16));
    } else {
      s.push(String.fromCharCode(b));
    }
  }
  return `"${s.join("")}"`;
};
