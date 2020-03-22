<div align="center">
  <img alt="Header" src="https://i.imgur.com/6MnFlEn.png" width="500px">
    <h1>Nachbarschaftshilfe leicht gemacht :house: :raising_hand:</h1>
  <strong>Ein Projekt für den #WirVsVirus Hackathons der Bundesregierung</strong>
</div>
<p align="center">
  <a href="https://github.com/NeighborhoodAid/frontend/stargazers">
    <img src="https://img.shields.io/github/stars/NeighborhoodAid/frontend.svg?style=plasticr" alt="stars">
  </a>
  <a href="https://github.com/NeighborhoodAid/frontend/commits/master">
    <img src="https://img.shields.io/github/last-commit/NeighborhoodAid/frontend.svg?style=plasticr" alt="commits">
  </a>
</p>

# Frontend-Repository von NeighborhoodAid

## Projekt Set-Up
```
yarn install
```

### Kompilation und hot-reloads für den Entwicklungsserver mit Backend Server
#### Laden Sie die aktuelle Version des Backend-Servers herunter ####
```
https://github.com/NeighborhoodAid/Server/releases
```
#### Starten Sie den Backend-Server ####
```
java -jar Server-{version}-shaded.jar
```

### Anschließen starten Sie das 'Frontend'
```
yarn serve
```

### Kompilation und Minifizierung für die Auslieferung
```
yarn build
```

### Lints und Dateibehebungen anwenden
```
yarn lint
```

### Konfigurationsbearbeitung
See [Configuration Reference](https://cli.vuejs.org/config/).
