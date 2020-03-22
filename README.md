<div align="center">
  <img alt="Header" src="https://lh3.googleusercontent.com/u/0/d/1vqtzHS0mkJbLiJT9Q6yPeBtzpJPGXkey=w1920-h966-iv1" width="500px">
    <h1>Nachbarschaftshilfe leicht gemacht :house: :raising_hand:</h1>
  <strong>Ein Projekt für den <a href="https://wirvsvirushackathon.org/">#WirVsVirus</a> Hackathon der Bundesregierung</strong>
</div>
<p align="center">
  <a href="https://github.com/NeighborhoodAid/frontend/stargazers">
    <img src="https://img.shields.io/github/stars/NeighborhoodAid/frontend.svg?style=plasticr" alt="stars">
  </a>
  <a href="https://github.com/NeighborhoodAid/frontend/commits/master">
    <img src="https://img.shields.io/github/last-commit/NeighborhoodAid/frontend.svg?style=plasticr" alt="commits">
  </a>
</p>

## Was ist NeighborhoodAid?

Alle Information zu NeighborhoodAid findest du [hier](https://github.com/NeighborhoodAid/server#was-ist-neighborhoodaid).


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
Siehe [Configuration Reference](https://cli.vuejs.org/config/)
