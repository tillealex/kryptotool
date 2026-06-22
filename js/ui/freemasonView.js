window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ui = window.KryptoTool.ui || {};

function initFreemasonView() {
  const cipher = window.KryptoTool?.ciphers?.freemason;

  if (!cipher) {
    console.error("Freimaurer-Chiffre wurde nicht geladen.");
    return;
  }

  setFreemasonToolText();
  injectFreemasonAlphabetStyles();
  initFreemasonEncrypt(cipher);
  initFreemasonDecryptButtons(cipher);
  initFreemasonInversion();
  initFreemasonLabelToggle();
  renderFreemasonAlphabet(cipher);
}

function setFreemasonToolText() {
  const toolBlocks = document.querySelectorAll(".selected-tool");

  if (toolBlocks[0]) {
    const title = toolBlocks[0].querySelector("strong");
    const description = toolBlocks[0].querySelector("p");
    if (title) title.textContent = "Freimaurer-Code";
    if (description) {
      description.textContent = "Buchstaben werden als Linien-Symbole dargestellt. Die ersten Buchstaben nutzen ein Gitter ohne Punkt, spätere Buchstaben bekommen einen Punkt oder ein X-Feld.";
    }
  }

  if (toolBlocks[1]) {
    const title = toolBlocks[1].querySelector("strong");
    const description = toolBlocks[1].querySelector("p");
    if (title) title.textContent = "Freimaurer-Code lesen";
    if (description) {
      description.textContent = "Wähle unten das passende Symbol. Jeder Klick fügt den zugehörigen Buchstaben zum Klartext hinzu.";
    }
  }

  const infoTitle = document.querySelector(".info-card h3");
  const infoParagraphs = document.querySelectorAll(".info-card p");
  if (infoTitle) infoTitle.textContent = "Freimaurer-Code";
  if (infoParagraphs[0]) {
    infoParagraphs[0].textContent = "Der Freimaurer-Code ist eine Symbol-Geheimschrift. Jeder Buchstabe wird nicht durch einen anderen Buchstaben ersetzt, sondern durch ein Zeichen aus Linien und Punkten.";
  }
  if (infoParagraphs[1]) {
    infoParagraphs[1].textContent = "Das Alphabet wird in zwei 3×3-Gitter und zwei X-Gitter aufgeteilt. Die Form des Feldes und ein möglicher Punkt ergeben zusammen das Symbol.";
  }

  const statusValues = document.querySelectorAll(".status-card dd");
  if (statusValues[0]) statusValues[0].textContent = "Freimaurer-Code";
  if (statusValues[1]) statusValues[1].textContent = "Symbolschrift";
  if (statusValues[2]) statusValues[2].textContent = "weiß auf schwarz";
  if (statusValues[3]) statusValues[3].textContent = "A–Z";
}

function initFreemasonEncrypt(cipher) {
  const input = document.querySelector("[data-freemason-input]");
  const output = document.querySelector("[data-freemason-output]");
  const counter = document.querySelector("[data-encrypt-count]");

  if (!input || !output) return;

  input.addEventListener("input", () => {
    renderFreemasonText(input.value, output, cipher);
    updateTextCounter(counter, input.value.length);
    renderFreemasonAlphabet(cipher);
  });

  renderFreemasonText(input.value, output, cipher);
  updateTextCounter(counter, input.value.length);
}

function initFreemasonInversion() {
  const checkbox = document.querySelector("[data-invert-output]");
  const output = document.querySelector("[data-freemason-output]");

  if (!checkbox || !output) return;

  output.classList.toggle("is-inverted", checkbox.checked);
  checkbox.addEventListener("change", () => {
    output.classList.toggle("is-inverted", checkbox.checked);
    updateAlphabetInversionState();
  });
}

function initFreemasonLabelToggle() {
  const checkbox = document.querySelector("[data-toggle-symbol-labels]");
  const keyboard = document.querySelector("[data-freemason-keyboard]");

  if (!checkbox || !keyboard) return;

  keyboard.classList.toggle("show-labels", checkbox.checked);
  checkbox.addEventListener("change", () => {
    keyboard.classList.toggle("show-labels", checkbox.checked);
  });
}

function initFreemasonDecryptButtons(cipher) {
  const keyboard = document.querySelector("[data-freemason-keyboard]");
  const output = document.querySelector("[data-decrypt-output]");
  const counter = document.querySelector("[data-decrypt-count]");

  if (!keyboard || !output) return;

  keyboard.innerHTML = "";

  cipher.FREEMASON_LETTERS.forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "freemason-button";
    button.dataset.letter = letter;
    button.setAttribute("aria-label", "Symbol " + letter);

    const symbol = createFreemasonSymbol(letter, cipher);
    const label = document.createElement("span");
    label.className = "freemason-button-label";
    label.textContent = letter;

    button.append(symbol, label);
    button.addEventListener("click", () => {
      output.textContent += letter;
      updateTextCounter(counter, output.textContent.length);
    });

    keyboard.appendChild(button);
  });

  const oldActions = keyboard.parentElement?.querySelector(".freemason-actions");
  oldActions?.remove();

  const actions = document.createElement("div");
  actions.className = "freemason-actions";

  const spaceButton = makeActionButton("Leerzeichen", () => {
    output.textContent += " ";
    updateTextCounter(counter, output.textContent.length);
  });

  const deleteButton = makeActionButton("⌫", () => {
    output.textContent = output.textContent.slice(0, -1);
    updateTextCounter(counter, output.textContent.length);
  });

  const clearButton = makeActionButton("Löschen", () => {
    output.textContent = "";
    updateTextCounter(counter, output.textContent.length);
  });

  actions.append(spaceButton, deleteButton, clearButton);
  keyboard.after(actions);
  updateTextCounter(counter, output.textContent.length);
}

function makeActionButton(label, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-action";
  button.textContent = label;
  button.addEventListener("click", action);
  return button;
}

function renderFreemasonText(text, output, cipher) {
  output.innerHTML = "";

  if (!text.trim()) {
    output.textContent = "Hier erscheinen die Freimaurer-Symbole …";
    output.classList.add("is-empty");
    return;
  }

  output.classList.remove("is-empty");

  cipher.normalizeFreemasonText(text).forEach((character) => {
    if (cipher.isFreemasonLetter(character)) {
      output.appendChild(createFreemasonSymbol(character, cipher));
      return;
    }

    if (character === "\n") {
      const lineBreak = document.createElement("span");
      lineBreak.className = "freemason-line-break";
      output.appendChild(lineBreak);
      return;
    }

    if (character === " ") {
      const space = document.createElement("span");
      space.className = "freemason-space";
      space.textContent = "·";
      output.appendChild(space);
      return;
    }

    const unknown = document.createElement("span");
    unknown.className = "freemason-unknown";
    unknown.textContent = character;
    output.appendChild(unknown);
  });
}

function ensureAlphabetPanel() {
  const encryptPanel = document.querySelector('[data-mode-panel="encrypt"]');
  const outputCard = encryptPanel?.querySelector(".output-card");
  if (!encryptPanel || !outputCard) return null;

  let card = encryptPanel.querySelector("[data-alphabet-card]");
  if (card) return card;

  card = document.createElement("article");
  card.className = "card output-card flow-card wide-text-card alphabet-card";
  card.dataset.alphabetCard = "true";
  card.innerHTML = `
    <div class="card-heading">
      <h2>4. Alphabet als Bild</h2>
      <span data-alphabet-mode-label>weiß auf schwarz</span>
    </div>
    <div class="output-placeholder freemason-output freemason-image alphabet-image" data-alphabet-output></div>
  `;
  outputCard.after(card);
  return card;
}

function renderFreemasonAlphabet(cipher) {
  const card = ensureAlphabetPanel();
  const alphabetOutput = card?.querySelector("[data-alphabet-output]");
  const invert = document.querySelector("[data-invert-output]");
  const modeLabel = card?.querySelector("[data-alphabet-mode-label]");
  if (!alphabetOutput) return;

  alphabetOutput.innerHTML = "";
  alphabetOutput.classList.remove("is-empty");
  alphabetOutput.classList.toggle("is-inverted", !!invert?.checked);

  cipher.FREEMASON_LETTERS.forEach((letter) => {
    const item = document.createElement("span");
    item.className = "alphabet-symbol-item";

    const symbol = createFreemasonSymbol(letter, cipher);
    const label = document.createElement("span");
    label.className = "alphabet-symbol-label";
    label.textContent = letter;

    item.append(symbol, label);
    alphabetOutput.appendChild(item);
  });

  if (modeLabel) {
    modeLabel.textContent = invert?.checked ? "schwarz auf weiß" : "weiß auf schwarz";
  }
}

function updateAlphabetInversionState() {
  const alphabetOutput = document.querySelector("[data-alphabet-output]");
  const invert = document.querySelector("[data-invert-output]");
  const modeLabel = document.querySelector("[data-alphabet-mode-label]");

  if (alphabetOutput) {
    alphabetOutput.classList.toggle("is-inverted", !!invert?.checked);
  }

  if (modeLabel) {
    modeLabel.textContent = invert?.checked ? "schwarz auf weiß" : "weiß auf schwarz";
  }
}

function createFreemasonSymbol(letter, cipher) {
  const symbol = document.createElement("span");
  symbol.className = "freemason-symbol " + cipher.getFreemasonSymbolClass(letter);
  symbol.setAttribute("aria-label", letter);
  return symbol;
}

function injectFreemasonAlphabetStyles() {
  if (document.querySelector("[data-alphabet-style]")) return;

  const style = document.createElement("style");
  style.dataset.alphabetStyle = "true";
  style.textContent = `
    .alphabet-image {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(4.4rem, 1fr));
      gap: 0.75rem;
      align-items: stretch;
    }

    .alphabet-symbol-item {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      min-height: 4.8rem;
      padding: 0.3rem;
      color: currentColor;
    }

    .alphabet-symbol-label {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
  `;
  document.head.appendChild(style);
}

function updateTextCounter(counter, amount) {
  if (counter) {
    counter.textContent = amount + " Zeichen";
  }
}

window.KryptoTool.ui.initFreemasonView = initFreemasonView;
