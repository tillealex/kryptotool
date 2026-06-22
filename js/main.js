initApp();

function initApp() {
  initModePlaceholder();
  initDropdownPanels();
  initToolSelection();

  const activeTool = startDefaultTool();

  if (activeTool) {
    console.info("Kryptotool gestartet:", activeTool.label || activeTool.id);
  }
}

function startDefaultTool() {
  const registry = window.KryptoTool?.registry;

  if (!registry || typeof registry.initTool !== "function") {
    console.error("Werkzeug-Registry konnte nicht gestartet werden.");
    return null;
  }

  return registry.initTool("freemason");
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
  const registry = window.KryptoTool?.registry;
  const toolButtons = document.querySelectorAll(".tool-link");

  toolButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toolButtons.forEach((toolButton) => toolButton.classList.remove("is-active"));
      button.classList.add("is-active");

      const toolId = button.dataset.tool;
      if (!toolId) return;

      const activeTool = registry?.initTool(toolId);
      if (activeTool) {
        console.info("Werkzeug gewechselt:", activeTool.label || activeTool.id);
      }
    });
  });
}
