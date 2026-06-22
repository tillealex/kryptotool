window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ui = window.KryptoTool.ui || {};

function initFreemasonView() {
  const cipher = window.KryptoTool?.ciphers?.freemason;

  if (!cipher) {
    console.error("Freimaurer-Chiffre wurde nicht geladen.");
    return;
  }

  initFreemasonEncrypt(cipher);
  initFreemasonDecryptButtons(cipher);
  initFreemasonInversion();
  initFreemasonLabelToggle();
}

function initFreemasonEncrypt(cipher) {
  const input = document.querySelector("[data-freemason-input]");
  const output = document.querySelector("[data-freemason-output]");
  const counter = document.querySelector("[data-encrypt-count]");

  if (!input || !output) return;

  input.addEventListener("input", () => {
    renderFreemasonText(input.value, output, cipher);
    updateTextCounter(counter, input.value.length);
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

function createFreemasonSymbol(letter, cipher) {
  const symbol = document.createElement("span");
  symbol.className = "freemason-symbol " + cipher.getFreemasonSymbolClass(letter);
  symbol.setAttribute("aria-label", letter);
  return symbol;
}

function updateTextCounter(counter, amount) {
  if (counter) {
    counter.textContent = amount + " Zeichen";
  }
}

window.KryptoTool.ui.initFreemasonView = initFreemasonView;
