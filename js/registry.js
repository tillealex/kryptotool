window.KryptoTool = window.KryptoTool || {};
window.KryptoTool.registry = window.KryptoTool.registry || {};

(function initToolRegistry(registry) {
  const tools = new Map();

  function registerTool(tool) {
    if (!tool || !tool.id) {
      console.error("Werkzeug konnte nicht registriert werden: id fehlt.", tool);
      return;
    }

    tools.set(tool.id, tool);
  }

  function getTool(id) {
    return tools.get(id) || null;
  }

  function getRegisteredTools() {
    return Array.from(tools.values());
  }

  function getDefaultTool() {
    return getTool("freemason") || getRegisteredTools()[0] || null;
  }

  function initTool(id) {
    const tool = id ? getTool(id) : getDefaultTool();

    if (!tool) {
      console.error("Kein Werkzeug in der Registry gefunden.");
      return null;
    }

    if (typeof tool.init !== "function") {
      console.error("Werkzeug kann nicht gestartet werden: init-Funktion fehlt.", tool);
      return null;
    }

    tool.init();
    return tool;
  }

  registry.registerTool = registerTool;
  registry.getTool = getTool;
  registry.getRegisteredTools = getRegisteredTools;
  registry.getDefaultTool = getDefaultTool;
  registry.initTool = initTool;

  const freemasonCipher = window.KryptoTool?.ciphers?.freemason?.FREEMASON_CIPHER;
  const freemasonView = window.KryptoTool?.ui?.initFreemasonView;

  if (freemasonCipher && freemasonView) {
    registerTool({
      id: freemasonCipher.id,
      label: freemasonCipher.label,
      type: freemasonCipher.type,
      category: "cipher",
      description: "Symbolschrift mit Linien, Winkeln und Punkten.",
      supports: freemasonCipher.supports,
      alphabet: freemasonCipher.alphabet,
      defaultMode: "encrypt",
      init: freemasonView,
    });
  } else {
    console.error("Freimaurer-Werkzeug konnte nicht registriert werden.");
  }

  const centaurCipher = window.KryptoTool?.ciphers?.centaur;
  const centaurView = window.KryptoTool?.ui?.initCentaurView;

  if (centaurCipher && centaurView) {
    registerTool({
      id: centaurCipher.id,
      label: centaurCipher.label,
      type: centaurCipher.type,
      category: "cipher",
      description: centaurCipher.description,
      supports: centaurCipher.supports,
      alphabet: centaurCipher.alphabet,
      defaultMode: "encrypt",
      init: centaurView,
    });
  } else {
    console.error("Zentauren-Werkzeug konnte nicht registriert werden.");
  }
})(window.KryptoTool.registry);
