const s = "\x00asm\x01\x00\x00\x00\x01\x04\x01`\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x07\x13\x02\x06memory\x02\x00\x06_start\x00\x00\x0a2\x010\x01\x02\x7fA\x00!\x00A\x01!\x01\x02@\x03@A\x01 \x01A\xe4\x00Hk\x0d\x01 \x00 \x01j!\x00 \x01A\x01j!\x01\x0c\x00\x0b\x0b \x00\x0f\x0b";
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;