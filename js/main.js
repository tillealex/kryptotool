const FREEMASON_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

initApp();

function initApp() {
  initModePlaceholder();
  initDropdownPanels();
  initToolSelection();
  initFreemasonEncrypt();
  initFreemasonDecryptButtons();
  initFreemasonInversion();
  console.info("Kryptotool-Prototyp gestartet: Freimaurer-Code aktiv");
}

function initModePlaceholder() {
  const buttons = document.querySelectorAll("[data-mode-button]");
  const panels = document.querySelectorAll("[data-mode-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedMode = button.dataset.modeButton;

      buttons.forEach((modeButton) => {
        modeButton.classList.toggle("is-active", modeButton === button);
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-hidden", panel.dataset.modePanel !== selectedMode);
      });
    });
  });
}

function initDropdownPanels() {
  const triggers = document.querySelectorAll("[data-dropdown-trigger]");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dropdown = trigger.closest(".side-dropdown");
      if (!dropdown) return;

      const isOpen = dropdown.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));

      const arrow = trigger.querySelector(".dropdown-arrow");
      if (arrow) {
        arrow.textContent = isOpen ? "⌃" : "⌄";
      }
    });
  });
}

function initToolSelection() {
  const toolButtons = document.querySelectorAll(".tool-link");

  toolButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toolButtons.forEach((toolButton) => toolButton.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });
}

function initFreemasonEncrypt() {
  const input = document.querySelector("[data-freemason-input]");
  const output = document.querySelector("[data-freemason-output]");
  const counter = document.querySelector("[data-encrypt-count]");

  if (!input || !output) return;

  input.addEventListener("input", () => {
    renderFreemasonText(input.value, output);
    if (counter) {
      counter.textContent = `${input.value.length} Zeichen`;
    }
  });

  renderFreemasonText(input.value, output);
}

function initFreemasonInversion() {
  const checkbox = document.querySelector("[data-invert-output]");
  const output = document.querySelector("[data-freemason-output]");

  if (!checkbox || !output) return;

  checkbox.addEventListener("change", () => {
    output.classList.toggle("is-inverted", checkbox.checked);
  });
}

function initFreemasonDecryptButtons() {
  const keyboard = document.querySelector("[data-freemason-keyboard]");
  const output = document.querySelector("[data-decrypt-output]");
  const counter = document.querySelector("[data-decrypt-count]");

  if (!keyboard || !output) return;

  FREEMASON_LETTERS.forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "freemason-button";
    button.dataset.letter = letter;
    button.setAttribute("aria-label", `Symbol ${letter}`);

    const symbol = createFreemasonSymbol(letter);
    const label = document.createElement("span");
    label.className = "freemason-button-label";
    label.textContent = letter;

    button.append(symbol, label);
    button.addEventListener("click", () => {
      output.textContent += letter;
      updateDecryptCounter(output, counter);
    });

    keyboard.appendChild(button);
  });

  const actions = document.createElement("div");
  actions.className = "freemason-actions";

  const spaceButton = makeActionButton("Leerzeichen", () => {
    output.textContent += " ";
    updateDecryptCounter(output, counter);
  });

  const deleteButton = makeActionButton("⌫", () => {
    output.textContent = output.textContent.slice(0, -1);
    updateDecryptCounter(output, counter);
  });

  const clearButton = makeActionButton("Löschen", () => {
    output.textContent = "";
    updateDecryptCounter(output, counter);
  });

  actions.append(spaceButton, deleteButton, clearButton);
  keyboard.after(actions);
}

function makeActionButton(label, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-action";
  button.textContent = label;
  button.addEventListener("click", action);
  return button;
}

function updateDecryptCounter(output, counter) {
  if (counter) {
    counter.textContent = `${output.textContent.length} Zeichen`;
  }
}

function renderFreemasonText(text, output) {
  output.innerHTML = "";

  if (!text.trim()) {
    output.textContent = "Hier erscheinen die Freimaurer-Symbole …";
    output.classList.add("is-empty");
    return;
  }

  output.classList.remove("is-empty");

  Array.from(text.toUpperCase()).forEach((character) => {
    if (/[A-Z]/.test(character)) {
      output.appendChild(createFreemasonSymbol(character));
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

function createFreemasonSymbol(letter) {
  const symbol = document.createElement("span");
  symbol.className = `freemason-symbol ${getFreemasonClass(letter)}`;
  symbol.setAttribute("aria-label", letter);
  return symbol;
}

function getFreemasonClass(letter) {
  const index = FREEMASON_LETTERS.indexOf(letter);

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
