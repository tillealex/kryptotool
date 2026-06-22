# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

## 0.1.5 - Overlay-Dropdown-Prototyp

### Neu

- Dropdowns folgen jetzt der gewünschten kompakten Variante aus der Bildreferenz.
- Im Grundzustand sind nur die Buttons `Verfahren` und `Infos` sichtbar.
- Beim Klick gleiten die Dropdown-Menüs fließend nach unten auf.
- Die geöffneten Dropdowns liegen als Overlay über den unteren Boxen, statt den Arbeitsbereich nach unten zu schieben.

### Geändert

- Die seitlichen festen Spalten wurden entfernt.
- Verfahren und Infos sitzen nun oberhalb der zentralen Arbeitsbox in einer kompakten Bedienleiste.
- Der zentrale Arbeitsbereich bleibt in Position und wird von geöffneten Menüs überlagert.

### Hinweis

- Diese Variante entspricht stärker der kompakten Mockup-Sequenz: geschlossen → Verfahren geöffnet → Infos geöffnet.
- Die kryptographischen Funktionen sind weiterhin Platzhalter.

## 0.1.4 - Kompakter Dropdown-Prototyp

### Neu

- Layout nach der kompakteren unteren Mockup-Variante umgesetzt.
- Links und rechts stehen die Dropdown-Bereiche jetzt als eigene Spalten neben der zentralen Arbeitsfläche.
- Beide Seitenbereiche passen sich in Höhe und Position an die zentrale Verschlüsseln-/Entschlüsseln-Box an.
- Die Verfahren-Liste enthält nun konkrete Einträge für Textgeheimschriften, Symbolgeheimschriften und Analysewerkzeuge.
- Die Info-Box erklärt das Caesar-Verfahren ausführlicher.
- Dropdown-Pfeile ändern beim Auf- und Zuklappen ihren Zustand.

### Geändert

- Die breite obere Layout-Variante bleibt nur noch als alternative Layout-Idee im Projektgedächtnis erhalten.
- Bei schmaleren Browserfenstern ordnen sich Verfahren, Arbeitsbereich und Infos weiterhin untereinander an.

### Hinweis

- Die Dropdowns zeigen jetzt besser, wie die Oberfläche später aufgleitet.
- Die kryptographischen Funktionen sind weiterhin Platzhalter.

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
