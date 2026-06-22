window.KryptoTool = window.KryptoTool || {};

function getRegisteredTools() {
  const freemasonCipher = window.KryptoTool?.ciphers?.freemason?.FREEMASON_CIPHER;
  return freemasonCipher ? [freemasonCipher] : [];
}

window.KryptoTool.registry = {
  getRegisteredTools,
};
