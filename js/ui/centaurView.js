window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.ui = window.KryptoTool.ui || {};

(function registerCentaurView(ns) {
  const selectors = {
    input: "[data-freemason-input]",
    output: "[data-freemason-output]",
    encryptCount: "[data-encrypt-count]",
    invert: "[data-invert-output]",
    keyboard: "[data-freemason-keyboard]",
    labelToggle: "[data-toggle-symbol-labels]",
    decryptOutput: "[data-decrypt-output]",
    decryptCount: "[data-decrypt-count]",
  };

  const state = {
    selectedChars: [],
  };

  function setToolText() {
    const toolBlocks = document.querySelectorAll(".selected-tool");

    if (toolBlocks[0]) {
      const title = toolBlocks[0].querySelector("strong");
      const description = toolBlocks[0].querySelector("p");
      if (title) title.textContent = "Zentaurische Schrift";
      if (description) {
        description.textContent = "Buchstaben werden als kantige Zentauren-Zeichen dargestellt. Die Zeichen sind als SVGs nachgezeichnet und bleiben dadurch in jeder Größe scharf.";
      }
    }

    if (toolBlocks[1]) {
      const title = toolBlocks[1].querySelector("strong");
      const description = toolBlocks[1].querySelector("p");
      if (title) title.textContent = "Zentaurische Schrift lesen";
      if (description) {
        description.textContent = "Wähle unten das passende Zentauren-Zeichen. Jeder Klick fügt den zugehörigen Buchstaben zum Klartext hinzu.";
      }
    }
  }

  function createGlyphElement(item, showLabel) {
    const wrapper = document.createElement("span");
    wrapper.className = "centaur-glyph-item";

    if (item.type === "space") {
      wrapper.classList.add("centaur-space");
      wrapper.textContent = "·";
      return wrapper;
    }

    if (item.type === "text") {
      wrapper.classList.add("centaur-fallback");
      wrapper.textContent = item.char;
      return wrapper;
    }

    const glyph = document.createElement("span");
    glyph.className = "centaur-glyph";
    glyph.innerHTML = item.svg;
    wrapper.appendChild(glyph);

    if (showLabel) {
      const label = document.createElement("span");
      label.className = "freemason-label centaur-label";
      label.textContent = item.char;
      wrapper.appendChild(label);
    }

    return wrapper;
  }

  function updateEncryptOutput() {
    const cipher = window.KryptoTool?.ciphers?.centaur;
    const input = document.querySelector(selectors.input);
    const output = document.querySelector(selectors.output);
    const count = document.querySelector(selectors.encryptCount);
    const invert = document.querySelector(selectors.invert);
    const labelToggle = document.querySelector(selectors.labelToggle);

    if (!cipher || !input || !output) return;

    const text = input.value || "";
    const encoded = cipher.encodeText(text);

    output.innerHTML = "";
    output.classList.toggle("is-empty", text.length === 0);
    output.classList.toggle("is-inverted", !!invert?.checked);

    if (!text) {
      output.textContent = "Hier erscheinen die Zentauren-Symbole …";
    } else {
      encoded.forEach((item) => output.appendChild(createGlyphElement(item, !!labelToggle?.checked)));
    }

    if (count) {
      count.textContent = `${text.length} Zeichen`;
    }
  }

  function updateDecryptOutput() {
    const cipher = window.KryptoTool?.ciphers?.centaur;
    const output = document.querySelector(selectors.decryptOutput);
    const count = document.querySelector(selectors.decryptCount);

    if (!cipher || !output) return;

    const text = cipher.decodeGlyphs(state.selectedChars);
    output.textContent = text;

    if (count) {
      count.textContent = `${text.length} Zeichen`;
    }
  }

  function createKeyboardButton(glyph, showLabels) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "freemason-symbol-button centaur-symbol-button";
    button.dataset.centaurChar = glyph.char;
    button.setAttribute("aria-label", `Zentaurisch ${glyph.char}`);

    const symbol = document.createElement("span");
    symbol.className = "centaur-glyph";
    symbol.innerHTML = glyph.svg;
    button.appendChild(symbol);

    const label = document.createElement("span");
    label.className = "freemason-label centaur-label";
    label.textContent = glyph.char;
    label.hidden = !showLabels;
    button.appendChild(label);

    button.addEventListener("click", () => {
      state.selectedChars.push(glyph.char);
      updateDecryptOutput();
    });

    return button;
  }

  function renderKeyboard() {
    const cipher = window.KryptoTool?.ciphers?.centaur;
    const keyboard = document.querySelector(selectors.keyboard);
    const labelToggle = document.querySelector(selectors.labelToggle);

    if (!cipher || !keyboard) return;

    keyboard.innerHTML = "";
    cipher.getPalette().forEach((glyph) => {
      keyboard.appendChild(createKeyboardButton(glyph, !!labelToggle?.checked));
    });
  }

  function bindControls() {
    const input = document.querySelector(selectors.input);
    const invert = document.querySelector(selectors.invert);
    const labelToggle = document.querySelector(selectors.labelToggle);

    input?.addEventListener("input", updateEncryptOutput);
    invert?.addEventListener("change", updateEncryptOutput);
    labelToggle?.addEventListener("change", () => {
      updateEncryptOutput();
      renderKeyboard();
    });
  }

  function injectStyles() {
    if (document.querySelector("[data-centaur-style]")) return;

    const style = document.createElement("style");
    style.dataset.centaurStyle = "true";
    style.textContent = `
      .centaur-glyph-item {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        margin: 0.18rem;
        color: currentColor;
      }

      .centaur-glyph {
        display: inline-flex;
        width: 3rem;
        height: 3rem;
        align-items: center;
        justify-content: center;
        color: currentColor;
      }

      .centaur-svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .centaur-space,
      .centaur-fallback {
        display: inline-flex;
        min-width: 2rem;
        min-height: 3rem;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }

      .centaur-symbol-button .centaur-glyph {
        width: 2.5rem;
        height: 2.5rem;
      }
    `;
    document.head.appendChild(style);
  }

  function initCentaurView() {
    const cipher = window.KryptoTool?.ciphers?.centaur;
    if (!cipher) {
      console.error("Zentaurische Schrift konnte nicht gestartet werden.");
      return false;
    }

    injectStyles();
    setToolText();
    bindControls();
    renderKeyboard();
    updateEncryptOutput();
    updateDecryptOutput();

    return true;
  }

  ns.initCentaurView = initCentaurView;
})(window.KryptoTool.ui);
