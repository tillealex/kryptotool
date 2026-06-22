# PROJECT_CONTEXT.md

## Projektname

Kryptotool

---

## Projektziel

Das Projekt bündelt mehrere interaktive Kryptographie- und Geheimschriftenwerkzeuge in einer gemeinsamen Webanwendung. Nutzerinnen und Nutzer sollen Geheimschriften auswählen, Texte verschlüsseln und entschlüsseln sowie einfache Kryptoanalysen durchführen können.

---

## Zielgruppe

- Lehrkraft zur Unterrichtsvorbereitung und Demonstration
- Schülerinnen und Schüler der Sekundarstufe I
- Einsatz im Informatikunterricht zum Thema Datenschutz, Verschlüsselung und Geheimschriften
- Einsatz im Mathematik- oder Projektunterricht, wenn Muster, Häufigkeiten und systematische Verfahren untersucht werden

---

## Nutzungssituation

- lokal im Browser
- als Unterrichtsdemonstration am Beamer oder Whiteboard
- später als GitHub-Pages-Webseite
- als Sammelprojekt für bereits vorhandene Kryptographie-Tools

---

## Aktueller Stand

- Repository ist angelegt.
- Grundstruktur für eine modulare Webanwendung wurde vorbereitet.
- Ordner `Dateivorlagen` dient als Sammelort für bisherige Einzeltools, bevor sie in die neue Struktur überführt werden.
- Die Kryptoanalyse-Station besitzt ein dunkles, technisches Unterrichtsdesign.
- Dropdown-Bereiche für Verfahren und Infos sind vorhanden.
- Umschaltung zwischen `Verschlüsseln` und `Entschlüsseln` funktioniert.
- Freimaurer-Code ist als erstes nutzbares Verfahren umgesetzt.
- Verschlüsseln: Texteingabe wird direkt in Freimaurer-Symbole umgewandelt.
- Entschlüsseln: Symbolbuttons erzeugen Klartext.
- Freimaurer-Bildausgabe kann invertiert werden.
- Buchstabenhilfen unter den Symbolbuttons können optional eingeblendet werden.
- Der Freimaurer-Code wurde aus `js/main.js` herausgelöst und in Module aufgeteilt.
- `js/registry.js` ist jetzt eine echte Werkzeugliste und startet Werkzeuge über eine allgemeine Werkzeug-Schnittstelle.
- Zentaurische Schrift ist als zweites Symbolverfahren vorbereitet und auswählbar.
- Zentaurische Zeichen werden als inline-SVGs in `js/ciphers/centaur.js` bereitgestellt.

---

## Technische Struktur

```text
kryptotool/
├── README.md
├── PROJECT_CONTEXT.md
├── CHANGELOG.md
├── ARCHITECTURE.md
├── index.html
├── css/
│   ├── global.css
│   ├── layout.css
│   ├── components.css
│   └── themes.css
├── js/
│   ├── main.js
│   ├── app.js
│   ├── state.js
│   ├── registry.js
│   ├── ciphers/
│   │   ├── freemason.js
│   │   └── centaur.js
│   ├── analysis/
│   ├── ui/
│   │   ├── freemasonView.js
│   │   └── centaurView.js
│   └── utils/
├── assets/
│   ├── icons/
│   └── images/
├── docs/
└── Dateivorlagen/
```

Kurze Erklärung:

- `index.html`: Startpunkt der Anwendung und aktuelle Arbeitsoberfläche
- `css/global.css`: globale Variablen, Grundfarben, Typografie und Hintergrund
- `css/layout.css`: Raster, Seitenaufbau, responsive Struktur
- `css/components.css`: Karten, Buttons, Navigation, Eingabe- und Ausgabefelder
- `css/themes.css`: visuelles Design und CSS-Darstellung der Freimaurer-Symbole
- `js/main.js`: Einstiegspunkt, koordiniert Grundinteraktionen und startet Werkzeuge über die Registry
- `js/app.js`: vorbereitetes Modul für spätere zentrale Anwendungslogik
- `js/state.js`: vorbereiteter zentraler Zustand der Anwendung
- `js/registry.js`: zentrale Werkzeugliste mit Registrierung, Abfrage und Startfunktion; enthält aktuell Freimaurer-Code und Zentaurische Schrift
- `js/ciphers/freemason.js`: fachliche Freimaurer-Logik, Alphabet, Symbolklassen und Werkzeug-Metadaten
- `js/ciphers/centaur.js`: fachliche Zentauren-Logik und inline-SVGs für die Zeichen
- `js/ui/freemasonView.js`: DOM-Logik für Freimaurer-Eingabe, Ausgabe, Symboltastatur und Hilfseinstellungen
- `js/ui/centaurView.js`: DOM-Logik für Zentauren-Ausgabe und Symboltastatur
- `js/analysis/`: spätere Kryptoanalyse-Werkzeuge
- `js/ui/`: Darstellung und Bedienoberfläche
- `js/utils/`: Hilfsfunktionen
- `Dateivorlagen/`: Ablage für bisherige Kryptotools als Ausgangsmaterial

---

## Wichtige Designentscheidungen

- Die Anwendung wird modular aufgebaut.
- Jede Geheimschrift soll möglichst ein eigenes JavaScript-Modul erhalten.
- Verschlüsselung, Entschlüsselung, Analyse und UI werden voneinander getrennt.
- Das Projekt soll zunächst ohne Framework funktionieren.
- Die Oberfläche soll für den Unterricht klar, ruhig und gut lesbar sein.
- Das gewählte Design orientiert sich an einer dunklen, technischen Kryptoanalyse-Station.
- Nutzer ohne technische Vorerfahrung sollen die Seite schnell erfassen können.
- Die Hauptorientierung erfolgt aktuell über die beiden großen Bereiche `Verschlüsseln` und `Entschlüsseln`.
- Die linke Dropdown-Box bündelt Verfahren und Analysewerkzeuge.
- Die rechte Dropdown-Box bündelt Verfahrensinfo, Schnellhilfe und aktuelle Einstellungen.
- Freimaurer-Symbole werden weiter per HTML/CSS erzeugt; die Symbolklassen kommen aus dem Fachmodul.
- Zentaurische Zeichen werden als inline-SVGs umgesetzt, damit sie lokal ohne zusätzliche Dateiladeprobleme funktionieren.
- `index.html` wird vorerst nicht auf `<script type="module">` umgestellt. Stattdessen werden klassische Script-Dateien in fester Reihenfolge geladen, damit die lokale Nutzung per Doppelklick stabil bleibt.
- Neue Werkzeuge sollen über `js/registry.js` registriert werden, statt direkt in `js/main.js` gestartet zu werden.

---

## Fachliche oder didaktische Entscheidungen

- Verfahren sollen nicht nur funktionieren, sondern verständlich erklärt werden können.
- Begriffe müssen für Schülerinnen und Schüler der Sekundarstufe I nachvollziehbar sein.
- Analysewerkzeuge sollen beim Erkennen von Mustern helfen.
- Symbol-Geheimschriften wie Freimaurer, Zentaurisch und Gnomisch brauchen eigene Darstellungslogik.
- Der Freimaurer-Code dient als erstes Muster dafür, wie weitere Verfahren modular aufgebaut werden können.
- Die Zentaurische Schrift dient als zweites Symbolverfahren, um die Registry-Schnittstelle mit mehreren Werkzeugen zu testen.

---

## Offene Aufgaben

- Modulschnittstelle für Verfahren endgültig festlegen.
- Caesar als erstes vollständiges Textverfahren integrieren.
- Dropdowns später aus der Registry erzeugen oder vollständig mit Registry-Werkzeugen verbinden.
- `app.js` und `state.js` stärker in den echten Anwendungsfluss einbinden.
- Kopieren- und Löschen-Buttons der Bildausgabe funktional anbinden.
- Dropdowns später mit echten Verfahren, Infotexten und Einstellungen verbinden.
- Kryptoanalyse-Ansicht als eigene Darstellung ausarbeiten.
- Gnomisch als weiteres Symbolverfahren integrieren.
- Häufigkeitsanalyse als erstes Analysewerkzeug umsetzen.
- GitHub Pages vorbereiten.

---

## Bekannte Probleme

- Beim Wechsel zwischen Werkzeugen werden bestehende Event-Listener noch nicht zentral verwaltet.
- Kopieren der Bildausgabe ist noch nicht funktional angebunden.
- Weitere Verfahren sind in der Oberfläche teilweise angekündigt, aber noch nicht umgesetzt.

---

## Arbeitsregeln für WILFRIED

- Keine unnötigen Frameworks verwenden.
- Lokale Nutzung im Browser muss stabil bleiben.
- Keine ES-Module oder dynamischen Imports einsetzen, solange die Seite lokal per Doppelklick funktionieren soll.
- HTML, CSS und JavaScript getrennt halten.
- Bei größeren Änderungen vollständige Dateien oder klar nachvollziehbare Patches liefern.
- Nach größeren Änderungen `CHANGELOG.md` und `PROJECT_CONTEXT.md` aktualisieren.
- Commit-Messages auf Englisch formulieren; Erklärung auf Deutsch.

---

## Letzter sinnvoller Git-Stand

```text
Branch:
feature/centaur-script-svg

Nächster empfohlener Schritt:
Zentaurische Schrift lokal testen und danach die gemeinsame Werkzeug-Schnittstelle weiter stabilisieren.
```
