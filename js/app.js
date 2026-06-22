import { state } from "./state.js";
import { getRegisteredTools } from "./registry.js";

export function initApp() {
  const tools = getRegisteredTools();
  console.info("Kryptotool gestartet", { state, tools });
}
