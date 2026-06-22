window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ciphers = window.KryptoTool.ciphers || {};

(function registerCentaurCipher(ns) {
  const makeSvg = (label, body) => `
    <svg class="centaur-svg" viewBox="0 0 80 80" role="img" aria-label="Zentaurisch ${label}" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor" stroke="currentColor" stroke-width="8" stroke-linecap="square" stroke-linejoin="miter">
        ${body}
      </g>
    </svg>`;

  const line = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const poly = (points) => `<polygon points="${points}"/>`;

  const GLYPHS = {
    A: makeSvg("A", `${line(14,54,36,30)}${line(44,30,66,54)}${line(24,54,56,54)}`),
    B: makeSvg("B", `${line(18,22,62,22)}${line(18,58,62,58)}${poly("31,35 49,35 40,47")}`),
    C: makeSvg("C", `${line(30,20,30,60)}${poly("46,28 58,40 46,52")}`),
    D: makeSvg("D", `${line(18,24,52,24)}${line(18,40,52,40)}${line(18,56,52,56)}${line(58,22,58,58)}${poly("18,28 30,40 18,52")}`),
    E: makeSvg("E", `${line(18,30,62,30)}${line(18,50,62,50)}`),
    F: makeSvg("F", `${line(30,20,30,60)}${poly("48,28 60,40 48,52")}`),
    G: makeSvg("G", `${line(18,24,58,24)}${line(18,56,58,56)}${poly("54,34 66,46 54,58")}`),
    H: makeSvg("H", `${line(30,20,30,60)}${poly("48,24 58,34 48,44")}`),
    I: makeSvg("I", `${line(40,18,40,62)}`),
    J: makeSvg("J", `${line(48,20,48,58)}${line(38,58,48,58)}${poly("24,48 36,58 36,38")}`),
    K: makeSvg("K", `${line(34,40,58,18)}${line(34,40,58,62)}${line(24,40,34,40)}`),
    L: makeSvg("L", `${line(32,20,32,60)}${line(32,60,46,60)}${poly("48,52 60,62 48,72")}`),
    M: makeSvg("M", `${line(24,20,24,60)}${line(40,20,40,60)}${line(56,20,56,60)}`),
    N: makeSvg("N", `${line(20,26,60,26)}${line(40,26,24,54)}${line(40,26,56,54)}`),
    O: makeSvg("O", `${line(18,28,32,52)}${line(62,28,48,52)}${line(26,28,54,28)}${line(32,52,48,52)}`),
    P: makeSvg("P", `${line(32,20,32,60)}${poly("50,28 62,40 50,52")}`),
    Q: makeSvg("Q", `${line(20,28,60,28)}${line(24,48,56,48)}${poly("28,48 36,60 44,48")}${poly("52,48 60,60 68,48")}`),
    R: makeSvg("R", `${line(28,20,28,60)}${line(28,22,58,22)}${line(28,40,48,40)}`),
    S: makeSvg("S", `${line(48,20,48,60)}${line(32,60,48,60)}${poly("22,50 34,60 34,40")}${poly("52,22 64,34 52,46")}`),
    T: makeSvg("T", `${line(40,20,40,62)}${poly("24,28 36,40 24,52")}${poly("56,28 44,40 56,52")}`),
    U: makeSvg("U", `${line(26,20,26,58)}${line(54,20,54,58)}${line(26,58,54,58)}`),
    V: makeSvg("V", `${line(20,28,60,28)}${poly("31,42 49,42 40,56")}`),
    W: makeSvg("W", `${line(18,30,34,54)}${line(62,30,46,54)}${line(34,54,46,54)}${poly("34,30 46,30 40,42")}`),
    X: makeSvg("X", `${line(22,24,58,56)}${line(58,24,22,56)}`),
    Y: makeSvg("Y", `${line(24,56,58,24)}${poly("20,28 30,20 40,30")}`),
    Z: makeSvg("Z", `${line(22,24,58,24)}${line(58,24,22,56)}${line(22,56,58,56)}`),
    "-": makeSvg("Bindestrich", `${line(22,36,60,36)}${poly("58,26 70,36 58,46")}${poly("16,42 28,52 16,62")}`),
  };

  const ALPHABET = Object.keys(GLYPHS);

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
    description: "Symbolschrift mit als SVG nachgezeichneten Zentauren-Zeichen.",
    supports: ["encrypt", "decrypt"],
    alphabet: ALPHABET,
    hasGlyph,
    encodeText,
    decodeGlyphs,
    getPalette,
  };
})(window.KryptoTool.ciphers);
