# Kryptotool

Sammlung interaktiver Kryptographie- und Geheimschriftenwerkzeuge für den Unterricht.

## Ziel

Dieses Projekt soll mehrere bisher einzeln entstandene Kryptographie-Tools in einer gemeinsamen Webanwendung bündeln.

Geplant sind insbesondere:

- Verschlüsseln mit verschiedenen Geheimschriften
- Entschlüsseln mit passenden Verfahren
- Kryptoanalyse von Texten und Symbolfolgen
- didaktisch gut nutzbare Oberflächen für den Unterricht

## Geplante Bereiche

- Caesar-Verschlüsselung
- Polybius-Quadrat
- Freimaurer-Geheimschrift
- Gnomische Schrift
- Vigenère-Verschlüsselung
- Häufigkeitsanalyse
- Caesar-Bruteforce
- Symbolanalyse

## Projektstruktur

```text
kryptotool/
├── index.html
├── css/
├── js/
│   ├── ciphers/
│   ├── analysis/
│   ├── ui/
│   └── utils/
├── assets/
├── docs/
└── Dateivorlagen/
```

## Nutzung

Die Anwendung soll als statische Webseite funktionieren und später gut über GitHub Pages veröffentlicht werden können.

## Entwicklungsprinzipien

- HTML, CSS und JavaScript bleiben sauber getrennt.
- Jede Geheimschrift wird möglichst als eigenes Modul umgesetzt.
- Wiederkehrende UI-Bestandteile werden zentral verwaltet.
- Kryptoanalyse wird von den Verschlüsselungsmodulen getrennt.
- Das Projekt soll ohne unnötige Frameworks auskommen.
