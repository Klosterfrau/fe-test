<template>
  <v-container align-center>
    <h1 class="text-md-center mt-4 pt-4">Willkommen zu unserem Test</h1>
    <p class="text-md-center">Deine Aufgabe ist es eine Webapp zu schreiben in der man Katzen verwalten und bewerten kann.</p>

    <v-flex md6 offset-md3>
      <h3 class="mt-4 pt-4">Teilaufgaben</h3>
      <ol class="body-2">
        <li>Zeige die Namen aller Katzen in einer Liste an.</li>
        <li>Füge einen Filter (Textfeld) hinzu, um nach Katzen suchen zu können. Angezeigt werden sollen nur Katzen, die den Filtertext enthalten. Bei leerem Filtertext sollen alle Katzen angezeigt werden.</li>
        <li>Wählt der User eine Katze in der Liste aus, sollen im rechten Bereich die Details der Katze erscheinen.</li>
        <li>Klickt der User auf die Icons neben den Votes, sollen die Votes der entsprechenden Katze hoch bzw. runter gezählt werden. Weniger als 0 Votes sind dabei nicht zugelassen</li>
      </ol>
    </v-flex>
    <v-flex md10 offset-md1 center>
      <img  src="../assets/mockup.png">
    </v-flex>
    <v-flex md4 offset-md4>
      <img  src="../assets/sampleKitty.png">
    </v-flex>

    <v-flex md6 offset-md3>
      <h3 class="mt-4 pt-4">Technik-Stack:</h3>
      <ol class="body-2">
        <li>Wir benutzen <a href="https://vuejs.org/">Vue.js</a> als Framework.</li>
        <li>Als Store benutzen wir <a href="https://vuex.vuejs.org/en/intro.html">Vuex.js</a> und haben DummyDaten bereits hinzugefügt.</li>
        <li>Als UI Lib verwenden wir für diesen Test <a href="https://vuetifyjs.com/en/">Vuetify.js</a></li>
      </ol>
    </v-flex>
  </v-container>
</template>

<style>
  img {
    object-fit: contain;
    width: 100%;
    margin: 20px;
  }

  li {
    margin:5px;
  }
</style>