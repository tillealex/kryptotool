# Refactoring: Freimaurer-Code modularisieren

## Ziel

Der Freimaurer-Code wurde aus `js/main.js` herausgelöst, damit zukünftige Verfahren nach demselben Muster ergänzt werden können.

## Neue Struktur

```text
js/
├── main.js
├── registry.js
├── ciphers/
│   └── freemason.js
└── ui/
    └── freemasonView.js
```

## Zuständigkeiten

- `js/main.js`: startet die Grundinteraktionen der Oberfläche und lädt das Freimaurer-UI dynamisch.
- `js/ciphers/freemason.js`: enthält Alphabet, Werkzeug-Metadaten und die Berechnung der CSS-Symbolklassen.
- `js/ui/freemasonView.js`: erzeugt die Symbolausgabe, Symboltastatur, Invertierung und optionale Buchstabenhilfen.
- `js/registry.js`: registriert den Freimaurer-Code als erstes Werkzeug.

## Testhinweise

Nach dem Refactoring sollte im Browser geprüft werden:

1. Verschlüsseln-Modus öffnen.
2. Text eingeben, z. B. `TEST`.
3. Prüfen, ob Freimaurer-Symbole erscheinen.
4. Invertierung aktivieren und deaktivieren.
5. In den Entschlüsseln-Modus wechseln.
6. Symbolbuttons anklicken und prüfen, ob Klartext entsteht.
7. Buchstabenhilfen ein- und ausblenden.

## Nächster Schritt

Als nächstes kann Caesar als erstes Textverfahren integriert werden. Dabei sollte dieselbe Trennung aus Fachmodul und UI-Modul verwendet werden.
