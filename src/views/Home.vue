<template>
  <div class="home">
    <h1>NeighborhoodAid</h1>
    <hr/>
    <div class="description">
      <div><h2>Was ist NeighborhoodAid?</h2>
      <div>
      NeighborhoodAid ist eine Anwendung, die es Menschen, welche nicht selbst einkaufen können, weil sie zum Beispiel zur Risikogruppe für 
      <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Risikobewertung.html">COVID-19</a>, SARS oder andere Krankheiten gehören, ermöglicht, ihren Einkaufszettel online auf unserer Webseite zu erstellen. Über unsere Webseite haben andere Personen, welche helfen wollen, dann die Möglichkeit Einkaufslisten von betroffenen Personen in der Nähe zu sehen und den Einkauf für diese zu erledigen.
      </div>
      </div>
      <div>
        <h2>Wie ist dieses Projekt entstanden?</h2>
        <div>
        <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener">
          <img src="../assets/wirvsvirus.png" alt="Hackathon der Bundesregierung mit dem Slogan #wirvscorona"/>
        </a>
        </div>
      </div>
      <div>
        <h2>Wie kann man dieses Projekt unterstützen?</h2>
        <div>
        Es gibt 2 Möglichkeiten dieses Projekt zu unterstützen.<br/>
        <u>Nachbarschaftshilfe</u><br/>
        Sie können sich registrieren und Nachbarn in Ihrer Umgebung helfen beim Einkaufen.<br/>
        <u>Beteilung an der Entwicklung des Projekts</u><br/>
        Wie Sie vielleicht mitbekommen haben, ist dieses Projekt noch relativ jung. Wenn Sie sich an dem Quellcode des Projektes beteiligen möchten,
        besuchen Sie unsere <a href="https://github.com/neighboraid/">GitHub Organisation</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.description {
  font-weight: 600;
  text-align: left;

  & > div > div {
    border-left-style: solid;
    border-left-color: gainsboro;
    border-left-width: 3px;
    padding-left: 2vw;
    margin-left: 8vw;
    margin-right: 10vw;
  }

  h2 {
    margin-left: 4vw;
    font-weight: 900;
  }
}
</style>