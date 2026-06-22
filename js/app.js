import { state } from "./state.js";
import { getRegisteredTools } from "./registry.js";

export function initApp() {
  const tools = getRegisteredTools();
  console.info("Kryptotool gestartet", { state, tools });

  initModePlaceholder();
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
