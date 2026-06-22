# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

## Unreleased

### Neu

- Zentaurische Schrift als neues Symbolschrift-Verfahren ergänzt.
- Neues Fachmodul `js/ciphers/centaur.js` mit inline-SVG-Zeichen für A–Z und Bindestrich ergänzt.
- Neues UI-Modul `js/ui/centaurView.js` für Ausgabe, Symboltastatur und Entschlüsselung ergänzt.
- Verfahren-Dropdown enthält jetzt `Zentaurische Schrift` als auswählbares Werkzeug.

### Geändert

- Freimaurer-Code aus `js/main.js` herausgelöst.
- Neues Fachmodul `js/ciphers/freemason.js` für Alphabet, Symbolklassen und Metadaten ergänzt.
- Neues UI-Modul `js/ui/freemasonView.js` für Eingabe, Ausgabe, Symboltastatur, Invertierung und Buchstabenhilfen ergänzt.
- `js/main.js` ist wieder stärker Einstiegspunkt und Koordinator der Oberfläche.
- `js/registry.js` ist jetzt eine echte Werkzeugliste mit Registrierung, Abfrage und Startfunktion für Werkzeuge.
- `js/main.js` startet das aktive Werkzeug nun über die Registry statt direkt über die Freimaurer-UI.
- Die Werkzeugauswahl kann registrierte Werkzeuge über `data-tool` starten.

### Hinweis

- Die Anwendung nutzt weiterhin klassische Script-Dateien über `index.html`, damit die lokale Nutzung per Doppelklick stabil bleibt.
- Die Zentauren-Zeichen sind als inline-SVGs umgesetzt. Dadurch bleiben sie ohne zusätzliche Dateiladeprobleme lokal nutzbar.

## 0.2.2 - SVG-Icons und optionale Symbolhilfen

### Neu

- Eigene SVG-Icons für die Oberfläche ergänzt:
  - Stapel-Symbol für `Verfahren`
  - Stapel-Symbol für `Infos`
  - geschlossenes Schloss für `Verschlüsseln`
  - offenes Schloss für `Entschlüsseln`
- Checkbox in der Entschlüsselung ergänzt: `Buchstaben unter Symbolen anzeigen`.

### Geändert

- Buchstabenlabels unter den Freimaurer-Symbolbuttons sind standardmäßig ausgeblendet.
- Die Labels können bei Bedarf über die Checkbox eingeblendet werden.

## 0.2.1 - Freimaurer-Bildausgabe invertierbar

### Neu

- Checkbox zum Invertieren der Freimaurer-Bildausgabe ergänzt.
- Standard: weiße Zeichen auf schwarzem Grund.
- Invertiert: schwarze Zeichen auf weißem Grund.

### Geändert

- Aufbau im Freimaurer-Bereich neu geordnet:
  - Verfahren erklären
  - Text eingeben beziehungsweise Symbol auswählen
  - Ausgabe anzeigen
- Symbolbuttons zum Entschlüsseln sind nun weiß auf schwarzem Grund gestaltet.
- Linien der Freimaurer-Symbole wurden dicker gemacht.

## 0.2.0 - Freimaurer-Code funktional

### Neu

- Freimaurer-Code als erste tatsächlich nutzbare Geheimschrift umgesetzt.
- Verschlüsseln: Texteingabe wird direkt in eine Symbolausgabe umgewandelt.
- Entschlüsseln: Symbolbuttons erzeugen Klartext.
- Freimaurer-Symbole werden mit HTML/CSS gezeichnet.
- Leerzeichen werden in der Symbolausgabe als kleiner Punkt dargestellt.

### Geändert

- Der bisherige Symbolschrift-Platzhalter wurde durch eine erste funktionale Umsetzung ersetzt.
- Die Entschlüsseln-Ansicht besitzt nun eine Symboltastatur.

### Hinweis

- Die Umsetzung orientiert sich an der Struktur der vorhandenen Freimaurer-Alphabet-Seite.
- Kopieren der Symbolausgabe ist noch nicht funktional angebunden.
- Die Symbolauswahl zeigt zur besseren Bedienbarkeit aktuell noch kleine Buchstabenlabels.

## 0.1.7 - Erste Geheimschrift: Freimaurer-Code

### Neu

- Der Freimaurer-Code wurde als erste Geheimschrift in die Oberfläche eingefügt.
- Im Verfahren-Dropdown steht `Freimaurer-Code` nun als erster aktiver Eintrag.
- Arbeitsbereich, Infofeld und aktuelle Einstellungen sind auf den Freimaurer-Code umgestellt.
