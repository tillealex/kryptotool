export class CipherManager {
  constructor() {
    this.ciphers = new Map();
    this.currentCipher = null;
  }

  register(cipher) {
    this.ciphers.set(cipher.id, cipher);
  }

  load(id) {
    this.currentCipher = this.ciphers.get(id);
    return this.currentCipher;
  }
}
