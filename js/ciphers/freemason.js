window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ciphers = window.KryptoTool.ciphers || {};

const FREEMASON_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const FREEMASON_CIPHER = {
  id: "freemason",
  label: "Freimaurer-Code",
  type: "symbol-cipher",
  alphabet: FREEMASON_LETTERS,
  supports: ["encrypt", "decrypt"],
};

function normalizeFreemasonText(text) {
  return Array.from(text.toUpperCase());
}

function isFreemasonLetter(character) {
  return character.length === 1 && character >= "A" && character <= "Z";
}

function getFreemasonSymbolClass(letter) {
  const index = FREEMASON_LETTERS.indexOf(letter);

  if (index === -1) {
    return "";
  }

  if (index < 9) {
    return "grid grid-" + index;
  }

  if (index < 18) {
    return "grid grid-" + (index - 9) + " dotted";
  }

  if (index < 22) {
    return "x x-" + (index - 18);
  }

  return "x x-" + (index - 22) + " dotted";
}

window.KryptoTool.ciphers.freemason = {
  FREEMASON_LETTERS,
  FREEMASON_CIPHER,
  normalizeFreemasonText,
  isFreemasonLetter,
  getFreemasonSymbolClass,
};
