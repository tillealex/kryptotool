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
- Ein statischer Layout-Prototyp der Kryptoanalyse-Station wurde in `index.html` umgesetzt.
- Die Oberfläche besitzt noch keine echte Verschlüsselungs-, Entschlüsselungs- oder Analysefunktion.

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
│   ├── analysis/
│   ├── ui/
│   └── utils/
├── assets/
│   ├── icons/
│   └── images/
├── docs/
└── Dateivorlagen/
```

Kurze Erklärung:

- `index.html`: Startpunkt der Anwendung und aktueller Layout-Prototyp
- `css/global.css`: globale Variablen, Grundfarben, Typografie und Hintergrund
- `css/layout.css`: Raster, Seitenaufbau, responsive Struktur
- `css/components.css`: Karten, Buttons, Navigation, Eingabe- und Ausgabefelder
- `css/themes.css`: Notizen und spätere Varianten für das visuelle Design
- `js/main.js`: Einstiegspunkt der späteren Anwendung
- `js/app.js`: verbindet später Zustand, Oberfläche und Module
- `js/state.js`: zentraler Zustand der Anwendung
- `js/registry.js`: Registrierung der verfügbaren Geheimschriften und Analysewerkzeuge
- `js/ciphers/`: einzelne Verschlüsselungsverfahren
- `js/analysis/`: Kryptoanalyse-Werkzeuge
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
- Die Hauptorientierung erfolgt über zwei große Bereiche: `Verschlüsseln / Entschlüsseln` und `Kryptoanalyse`.
- Die linke Seitenleiste bündelt Verfahren und Analysewerkzeuge.
- Der zentrale Arbeitsbereich folgt der Reihenfolge: Texteingabe → Einstellungen → Ausgabe.
- Die rechte Spalte erklärt das gewählte Verfahren und bietet Schnellhilfe.

---

## Fachliche oder didaktische Entscheidungen

- Verfahren sollen nicht nur funktionieren, sondern verständlich erklärt werden können.
- Begriffe müssen für Schülerinnen und Schüler der Sekundarstufe I nachvollziehbar sein.
- Analysewerkzeuge sollen beim Erkennen von Mustern helfen.
- Symbol-Geheimschriften wie Freimaurer und Gnomisch brauchen eigene Darstellungslogik.

---

## Offene Aufgaben

- Layout-Prototyp im Browser prüfen und Designentscheidungen überarbeiten.
- Bisherige Einzeltools in `Dateivorlagen` sammeln.
- Bestehende Tools analysieren und in Module überführen.
- Modulschnittstelle für Verfahren endgültig festlegen.
- Caesar als erstes vollständiges Modul integrieren.
- Umschaltung zwischen Verschlüsseln und Entschlüsseln funktional machen.
- Kryptoanalyse-Ansicht als eigene Darstellung ausarbeiten.
- Symbolausgabe für Freimaurer und Gnomisch planen.
- Häufigkeitsanalyse als erstes Analysewerkzeug umsetzen.
- GitHub Pages vorbereiten.

---

## Bekannte Probleme

- Noch keine eigentliche Anwendung implementiert.
- Noch keine bestehenden Tools integriert.
- Modulschnittstellen sind geplant, aber noch nicht endgültig festgelegt.
- Der aktuelle Prototyp ist noch statisch und dient nur der Layoutbewertung.
- Mobile Darstellung muss nach dem ersten Browsertest geprüft werden.

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
main
```

Letzter empfohlener Commit:

```text
style: add dark crypto station layout prototype
```

---

## Nächster empfohlener Schritt

Den Layout-Prototyp im Browser prüfen. Danach sollten Farben, Abstände, Schriftgrößen, Bedienführung und mobile Darstellung bewertet werden, bevor echte Funktionen integriert werden.
