window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ciphers = window.KryptoTool.ciphers || {};

(function registerCentaurCipher(ns) {
  const makeSvg = (label, body) => `
    <svg class="centaur-svg" viewBox="0 0 100 100" role="img" aria-label="Zentaurisch ${label}" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" stroke="none">
        ${body}
      </g>
    </svg>`;

  const round = (value) => Number.parseFloat(value.toFixed(2));

  // -------------------------------------------------
  // Primitive Grundformen
  // -------------------------------------------------
  // Die Zentaurische Schrift wird nicht mehr als frei
  // abgezeichnete Einzelgrafik behandelt, sondern aus
  // wenigen wiederkehrenden Bausteinen zusammengesetzt:
  // horizontale, vertikale und diagonale Balken sowie
  // kleine Dreiecksmarker.

  const barH = (x, y, length = 56, thickness = 10, chamfer = 6) => {
    const x2 = x + length;
    const y2 = y + thickness;
    return `<polygon points="${x + chamfer},${y} ${x2 - chamfer},${y} ${x2},${y + thickness / 2} ${x2 - chamfer},${y2} ${x + chamfer},${y2} ${x},${y + thickness / 2}"/>`;
  };

  const barV = (x, y, length = 58, thickness = 10, chamfer = 6) => {
    const x2 = x + thickness;
    const y2 = y + length;
    return `<polygon points="${x + thickness / 2},${y} ${x2},${y + chamfer} ${x2},${y2 - chamfer} ${x + thickness / 2},${y2} ${x},${y2 - chamfer} ${x},${y + chamfer}"/>`;
  };

  const barDiag = (x1, y1, x2, y2, thickness = 10) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);
    const nx = (-dy / length) * (thickness / 2);
    const ny = (dx / length) * (thickness / 2);

    return `<polygon points="${round(x1 + nx)},${round(y1 + ny)} ${round(x2 + nx)},${round(y2 + ny)} ${round(x2 - nx)},${round(y2 - ny)} ${round(x1 - nx)},${round(y1 - ny)}"/>`;
  };

  const triUp = (cx, cy, size = 10) => `<polygon points="${cx},${cy - size / 2} ${cx + size},${cy + size / 2} ${cx - size},${cy + size / 2}"/>`;
  const triDown = (cx, cy, size = 10) => `<polygon points="${cx - size},${cy - size / 2} ${cx + size},${cy - size / 2} ${cx},${cy + size / 2}"/>`;
  const triLeft = (cx, cy, size = 10) => `<polygon points="${cx - size / 2},${cy} ${cx + size / 2},${cy - size} ${cx + size / 2},${cy + size}"/>`;
  const triRight = (cx, cy, size = 10) => `<polygon points="${cx + size / 2},${cy} ${cx - size / 2},${cy - size} ${cx - size / 2},${cy + size}"/>`;

  // -------------------------------------------------
  // Vollständiges Alphabet als primitive SVGs
  // -------------------------------------------------
  // Diese Version ist bewusst als konstruktiver Zwischenstand
  // angelegt. Einige Formen müssen später noch genauer an die
  // Vorlage angepasst werden, aber alle Zeichen folgen jetzt
  // derselben bausteinartigen Logik.

  const GLYPHS = {
    // Dach- und Chevronformen
    A: makeSvg("A", `${barDiag(20,68,42,34)}${barDiag(58,34,80,68)}${barH(30,64,40,10)}`),
    N: makeSvg("N", `${barH(22,24,56,10)}${barDiag(28,62,50,34)}${barDiag(72,62,50,34)}`),
    O: makeSvg("O", `${barH(26,26,48,10)}${barDiag(22,34,40,62)}${barDiag(78,34,60,62)}${barH(40,62,20,10)}`),
    W: makeSvg("W", `${barDiag(20,34,40,62)}${barDiag(80,34,60,62)}${barH(40,62,20,10)}${triDown(50,44,8)}`),

    // Horizontale Balkenformen
    B: makeSvg("B", `${barH(22,26,56,10)}${barH(22,60,56,10)}${triDown(50,47,9)}`),
    E: makeSvg("E", `${barH(22,28,56,10)}${barH(22,62,56,10)}`),
    G: makeSvg("G", `${barH(18,24,50,10)}${barH(18,56,50,10)}${triLeft(66,46,10)}`),
    Q: makeSvg("Q", `${barH(20,28,60,10)}${barH(24,48,48,10)}${triDown(36,62,8)}${triDown(60,62,8)}`),
    V: makeSvg("V", `${barH(22,30,56,10)}${triDown(50,52,10)}`),

    // Vertikale Stammformen
    C: makeSvg("C", `${barV(30,20,40,10)}${triRight(52,28,10)}${triRight(52,52,10)}`),
    F: makeSvg("F", `${barV(30,20,40,10)}${triRight(52,30,10)}${triRight(52,50,10)}`),
    H: makeSvg("H", `${barV(36,20,52,10)}${triRight(58,34,9)}`),
    I: makeSvg("I", `${barV(45,20,60,10)}`),
    J: makeSvg("J", `${barV(48,20,42,10)}${triLeft(30,58,9)}`),
    L: makeSvg("L", `${barV(32,20,48,10)}${triRight(52,62,9)}`),
    M: makeSvg("M", `${barV(24,20,42,10)}${barV(40,20,42,10)}${barV(56,20,42,10)}`),
    P: makeSvg("P", `${barV(32,20,48,10)}${triRight(56,40,10)}`),
    S: makeSvg("S", `${barV(44,22,56,10)}${triLeft(35,64,8)}${triRight(64,34,8)}`),
    T: makeSvg("T", `${barV(40,20,56,10)}${triLeft(30,40,9)}${triRight(58,40,9)}`),
    U: makeSvg("U", `${barV(26,20,44,10)}${barV(54,20,44,10)}${barH(32,60,22,10)}`),

    // Eck- und Winkelformen
    D: makeSvg("D", `${barH(18,24,44,10)}${barH(18,40,44,10)}${barH(18,56,44,10)}${barV(58,22,42,10)}${triRight(22,40,10)}`),
    K: makeSvg("K", `${barDiag(32,40,58,18)}${barDiag(32,40,58,62)}${barH(22,35,14,10)}`),
    R: makeSvg("R", `${barV(28,20,48,10)}${barH(28,22,34,10)}`),

    // Diagonal- und Sonderformen
    X: makeSvg("X", `${barDiag(24,24,58,56)}${barDiag(58,24,24,56)}`),
    Y: makeSvg("Y", `${barDiag(28,60,62,26)}${triUp(30,28,8)}`),
    Z: makeSvg("Z", `${barH(22,24,40,10)}${barDiag(62,24,28,60)}${barH(28,60,40,10)}`),
    "-": makeSvg("Bindestrich", `${barH(24,36,48,10)}${triLeft(74,36,9)}${triRight(18,56,9)}`),
  };

  const ALPHABET = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "-",
  ];

  function normalizeChar(char) {
    return String(char || "").toUpperCase();
  }

  function hasGlyph(char) {
    return Object.prototype.hasOwnProperty.call(GLYPHS, normalizeChar(char));
  }

  function encodeText(text) {
    return Array.from(String(text || "")).map((char) => {
      if (char === " ") return { type: "space", char: " " };
      const normalized = normalizeChar(char);
      if (!hasGlyph(normalized)) return { type: "text", char };
      return { type: "glyph", char: normalized, svg: GLYPHS[normalized] };
    });
  }

  function decodeGlyphs(chars) {
    return chars.join("");
  }

  function getPalette() {
    return ALPHABET.map((char) => ({ char, svg: GLYPHS[char] }));
  }

  ns.centaur = {
    id: "centaur",
    label: "Zentaurische Schrift",
    type: "symbol-cipher",
    category: "cipher",
    description: "Zentaurische Schrift nach Eoin Colfers Roman \"Artemis Fowl: Die Verschwörung\".",
    supports: ["encrypt", "decrypt"],
    alphabet: ALPHABET,
    hasGlyph,
    encodeText,
    decodeGlyphs,
    getPalette,
  };
})(window.KryptoTool.ciphers);
