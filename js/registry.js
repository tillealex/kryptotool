import { FREEMASON_CIPHER } from "./ciphers/freemason.js";

const REGISTERED_TOOLS = [FREEMASON_CIPHER];

export function getRegisteredTools() {
  return REGISTERED_TOOLS;
}
