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
│   │   └── freemason.js
│   ├── analysis/
│   ├── ui/
│   │   └── freemasonView.js
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
- `js/main.js`: Einstiegspunkt, koordiniert Grundinteraktionen und lädt das Freimaurer-UI dynamisch
- `js/app.js`: vorbereitetes Modul für spätere zentrale Anwendungslogik
- `js/state.js`: vorbereiteter zentraler Zustand der Anwendung
- `js/registry.js`: Registrierung verfügbarer Geheimschriften und Analysewerkzeuge; enthält aktuell den Freimaurer-Code
- `js/ciphers/freemason.js`: fachliche Freimaurer-Logik, Alphabet, Symbolklassen und Werkzeug-Metadaten
- `js/ui/freemasonView.js`: DOM-Logik für Freimaurer-Eingabe, Ausgabe, Symboltastatur und Hilfseinstellungen
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
- `index.html` wird vorerst nicht auf `<script type="module">` umgestellt. Stattdessen lädt `js/main.js` das Freimaurer-UI-Modul dynamisch nach, damit die bestehende HTML-Struktur unverändert bleibt.

---

## Fachliche oder didaktische Entscheidungen

- Verfahren sollen nicht nur funktionieren, sondern verständlich erklärt werden können.
- Begriffe müssen für Schülerinnen und Schüler der Sekundarstufe I nachvollziehbar sein.
- Analysewerkzeuge sollen beim Erkennen von Mustern helfen.
- Symbol-Geheimschriften wie Freimaurer und Gnomisch brauchen eigene Darstellungslogik.
- Der Freimaurer-Code dient als erstes Muster dafür, wie weitere Verfahren modular aufgebaut werden können.

---

## Offene Aufgaben

- Modulschnittstelle für Verfahren endgültig festlegen.
- Caesar als erstes vollständiges Textverfahren integrieren.
- `app.js`, `state.js` und `registry.js` stärker in den echten Anwendungsfluss einbinden.
- Kopieren- und Löschen-Buttons der Freimaurer-Bildausgabe funktional anbinden.
- Dropdowns später mit echten Verfahren, Infotexten und Einstellungen verbinden.
- Kryptoanalyse-Ansicht als eigene Darstellung ausarbeiten.
- Gnomisch als weiteres Symbolverfahren integrieren.
- Häufigkeitsanalyse als erstes Analysewerkzeug umsetzen.
- GitHub Pages vorbereiten.

---

## Bekannte Probleme

- `app.js` und `state.js` sind vorbereitet, aber noch nicht produktiv eingebunden.
- Die Verfahrensauswahl im Dropdown ist bisher optisch aktivierbar, schaltet aber noch nicht zwischen echten Werkzeugen um.
- Kopieren der Symbolausgabe ist noch nicht funktional angebunden.
- Mobile Darstellung muss weiter geprüft werden.
- Die Modulschnittstelle ist durch Freimaurer vorbereitet, aber noch nicht endgültig für alle Verfahren vereinheitlicht.

---

## Arbeitsregeln für WILFRIED

- Projektstand immer aus Repository-Dateien ableiten.
- Keine bestehenden Tools überschreiben, bevor sie analysiert wurden.
- Alte Tools zunächst in `Dateivorlagen` sammeln.
- Bei größeren Änderungen `PROJECT_CONTEXT.md` und `CHANGELOG.md` aktualisieren.
- HTML, CSS und JavaScript sauber trennen.
- Neue Funktionen möglichst modular anlegen.
- Commit-Messages auf Englisch formulieren.
- Designänderungen zuerst als statische Prototypen prüfen, bevor Funktionen eingebaut werden.

---

## Letzter sinnvoller Git-Stand

Branch:

```text
refactor/extract-freemason-module
```

Letzter empfohlener Commit:

```text
refactor: extract freemason cipher into module
```

---

## Nächster empfohlener Schritt

Als Nächstes sollte die Freimaurer-Funktion im Browser geprüft werden. Danach ist Caesar als erstes Textverfahren sinnvoll, weil damit die Modulschnittstelle für einfache Buchstabenverschiebungen getestet werden kann.
