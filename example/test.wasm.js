const s = atob("AGFzbQEAAAABBAFgAAADAgEABQMBAAEHEwIGbWVtb3J5AgAGX3N0YXJ0AAAKMgEwAQJ/QQAhAEEBIQECQANAQQEgAUHkAEhrDQEgACABaiEAIAFBAWohAQwACwsgAA8L");
const b = new Uint8Array(s.length);
b.forEach((_, i) => b[i] = s.charCodeAt(i));
export default b;
