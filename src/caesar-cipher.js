export default function caesarCipher(string, shift) {
  return string.replace(/[a-z]/gi, (char) => {
    const offset = char === char.toUpperCase() ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - offset + shift) % 26) + offset
    );
  });
}
