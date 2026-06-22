export const FREEMASON_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const FREEMASON_CIPHER = {
  id: "freemason",
  label: "Freimaurer-Code",
  type: "symbol-cipher",
  alphabet: FREEMASON_LETTERS,
  supports: ["encrypt", "decrypt"],
};

export function normalizeFreemasonText(text) {
  return Array.from(text.toUpperCase());
}

export function isFreemasonLetter(character) {
  return /^[A-Z]$/.test(character);
}

export function getFreemasonSymbolClass(letter) {
  const index = FREEMASON_LETTERS.indexOf(letter);

  if (index === -1) {
    return "";
  }

  if (index < 9) {
    return `grid grid-${index}`;
  }

  if (index < 18) {
    return `grid grid-${index - 9} dotted`;
  }

  if (index < 22) {
    return `x x-${index - 18}`;
  }

  return `x x-${index - 22} dotted`;
}
