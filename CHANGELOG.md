# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

## 0.1.3 - Dropdown-Prototyp für Verfahren und Infos

### Neu

- Linkes Verfahren-Menü wurde von Hover-Menü auf klickbares Dropdown umgebaut.
- Im Grundzustand ist links nur der Button `Verfahren` sichtbar.
- Rechts wurde ein klickbares Dropdown `Infos` ergänzt.
- Beim Öffnen des Info-Dropdowns erscheinen:
  - Verfahrensinfo
  - Schnellhilfe
  - aktuelle Einstellungen
- Beide Dropdown-Bereiche öffnen sich mit fließender Animation.

### Geändert

- Rechte Infoboxen sind nicht mehr dauerhaft sichtbar und überladen dadurch den Arbeitsbereich nicht.
- Der zentrale Arbeitsbereich bleibt weiterhin ruhig und fokussiert.

### Hinweis

- Dropdowns sind bisher reine Layout- und Bedienplatzhalter.
- Die eigentlichen Verfahren und Infotexte werden später dynamisch mit den ausgewählten Modulen verbunden.

## 0.1.2 - Vereinfachter Layout-Prototyp

### Neu

- Layout stärker auf den zentralen Arbeitsfluss reduziert.
- Haupttabs nehmen jetzt die gesamte Seitenbreite ein.
- Linkes Verfahren-Menü wurde als Hover-Menü an den linken Bildschirmrand verlegt.
- Zentraler Arbeitsbereich folgt jetzt klar der Reihenfolge:
  - Text eingeben
  - Verschlüsselungs- oder Entschlüsselungsverfahren prüfen
  - Ergebnis ansehen
- Platzhalter-Umschaltung zwischen `Verschlüsseln` und `Entschlüsseln` ergänzt.

### Geändert

- Rechte Hilfespalte entfernt, um die Seite ruhiger und übersichtlicher zu machen.
- Kurzhilfe steht nun kompakter unter dem zentralen Arbeitsbereich.

### Hinweis

- Die Umschaltung zwischen Verschlüsseln und Entschlüsseln ist bisher nur ein Layout-Platzhalter.
- Es findet noch keine echte Berechnung statt.

## 0.1.1 - Design-Prototyp Kryptoanalyse-Station

### Neu

- Statischen HTML-Prototypen für das Layout der Kryptoanalyse-Station erstellt.
- Dunkles, technisches Design mit grünen Akzenten umgesetzt.
- Seitenaufbau nach der Designskizze vorbereitet:
  - linke Navigation mit Verfahren und Analysewerkzeugen
  - obere Haupttabs für Verschlüsseln/Entschlüsseln und Kryptoanalyse
  - zentraler Arbeitsbereich mit Texteingabe, Einstellungen und Ausgabe
  - rechte Hilfespalte mit Verfahrensinfo, Schnellhilfe und aktuellen Einstellungen
- CSS-Struktur für Layout und Komponenten deutlich erweitert.

### Hinweis

- Der Prototyp enthält bewusst noch keine echte Verschlüsselungs-, Entschlüsselungs- oder Analysefunktion.
- Ziel ist zunächst die Beurteilung von Bedienführung, visueller Struktur und Grundwirkung.

## 0.1.0 - Projektstart

### Neu

- Grundstruktur für das Kryptotool-Projekt angelegt.
- `README.md` ergänzt.
- `PROJECT_CONTEXT.md` als Projektgedächtnis erstellt.
- `ARCHITECTURE.md` für die geplante technische Struktur vorbereitet.
- Ordner `Dateivorlagen` als Sammelort für bestehende Kryptographie-Tools angelegt.
- Grundordner für CSS, JavaScript, Assets und Dokumentation vorbereitet.

### Geplant

- Bestehende Kryptotools sammeln und analysieren.
- Modulschnittstelle für Geheimschriften festlegen.
- Erste Oberfläche für Verschlüsseln, Entschlüsseln und Kryptoanalyse erstellen.
