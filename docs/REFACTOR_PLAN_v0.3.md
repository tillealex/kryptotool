# Refactor Plan v0.3

## Ziel
Umbau des Kryptotools von einer einzelnen Freimaurer-Anwendung zu einer modularen Kryptoplattform.

## Neue Struktur

js/
├── core/
│   ├── app.js
│   ├── cipherManager.js
│   ├── uiManager.js
│   └── storageManager.js
│
├── ciphers/
│   ├── freemason/
│   ├── centaur/
│   ├── gnomish/
│   ├── caesar/
│   ├── polybius/
│   └── vigenere/
│
├── analysis/
│   ├── frequency.js
│   ├── caesarCracker.js
│   ├── substitutionSolver.js
│   └── kasiski.js
│
└── shared/
    ├── svgBuilder.js
    ├── alphabetUtils.js
    └── clipboard.js

## Arbeitsschritte

1. CipherManager einführen
2. Freimaurer-Code in eigenes Modul auslagern
3. SVGBuilder einführen
4. Zentaurisch integrieren
5. Gnomisch integrieren
6. Analysemodule ergänzen

## Definition eines Cipher-Moduls

- alphabet.js
- renderer.js
- encrypt.js
- decrypt.js
- info.js

Alle Geheimschriften sollen dieselbe Schnittstelle besitzen.