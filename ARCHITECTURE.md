# Architektur des Kryptotools

## Grundidee

Das Kryptotool soll mehrere Geheimschriften und Analysewerkzeuge in einer gemeinsamen Webanwendung bündeln. Die Anwendung wird modular aufgebaut, damit neue Verfahren später ergänzt werden können, ohne die gesamte Oberfläche umzubauen.

## Hauptbereiche

Die Anwendung soll langfristig drei Hauptbereiche enthalten:

1. **Verschlüsseln**
   - Klartext eingeben
   - Geheimschrift auswählen
   - Schlüssel oder Optionen einstellen
   - Geheimtext oder Symbolausgabe erzeugen

2. **Entschlüsseln**
   - Geheimtext oder Symbolfolge eingeben
   - Verfahren auswählen
   - Schlüssel oder Optionen einstellen
   - Klartext erzeugen

3. **Kryptoanalyse**
   - Zeichen zählen
   - Häufigkeiten bestimmen
   - einfache Muster sichtbar machen
   - Caesar-Bruteforce durchführen
   - später Hinweise auf monoalphabetische oder polyalphabetische Verfahren geben

## JavaScript-Struktur

```text
js/
├── main.js
├── app.js
├── state.js
├── registry.js
├── ciphers/
│   ├── caesar.js
│   ├── polybius.js
│   ├── freimaurer.js
│   ├── gnomisch.js
│   └── vigenere.js
├── analysis/
│   ├── frequency.js
│   ├── caesarBruteforce.js
│   └── textStats.js
├── ui/
│   ├── renderToolSelector.js
│   ├── renderOptions.js
│   ├── renderOutput.js
│   └── tabs.js
└── utils/
    ├── alphabet.js
    ├── normalizeText.js
    └── symbols.js
```

## Modulprinzip für Geheimschriften

Jede Geheimschrift soll langfristig nach einem ähnlichen Muster aufgebaut sein:

```js
export const caesarCipher = {
  id: "caesar",
  name: "Caesar-Verschlüsselung",
  supports: {
    encrypt: true,
    decrypt: true,
    analyse: true
  },
  options: [],
  encrypt(text, options) {},
  decrypt(text, options) {}
};
```

Die Oberfläche soll nicht wissen müssen, wie ein Verfahren intern funktioniert. Sie nutzt nur die einheitlichen Methoden der Module.

## Trennung der Zuständigkeiten

- `main.js` startet die Anwendung.
- `app.js` verbindet Zustand, UI und Module.
- `state.js` verwaltet den aktuellen Zustand.
- `registry.js` kennt alle verfügbaren Verfahren.
- `ciphers/` enthält fachliche Verschlüsselungslogik.
- `analysis/` enthält Analysewerkzeuge.
- `ui/` enthält Darstellung und Interaktion.
- `utils/` enthält gemeinsame Hilfsfunktionen.

## CSS-Struktur

```text
css/
├── global.css
├── layout.css
├── components.css
└── themes.css
```

- `global.css`: Grundvariablen, Schrift, Farben, Reset
- `layout.css`: Seitenaufbau, Raster, Bereiche
- `components.css`: Buttons, Karten, Eingabefelder, Tabs
- `themes.css`: spätere Designvarianten

## Umgang mit alten Einzeltools

Bestehende Tools werden zunächst unverändert in `Dateivorlagen` gesammelt. Danach wird entschieden:

1. Welche Funktionen sollen übernommen werden?
2. Welche Gestaltungselemente bleiben erhalten?
3. Welche Logik wird in ein Modul überführt?
4. Welche Teile werden neu geschrieben?

Alte Tools dienen als Quelle, sollen aber nicht blind zusammenkopiert werden.
