<template>
  <div>
    <h1>Mögliche Klausuraufgaben</h1>
    
    <p class="frage">Vergleichen Sie Vue.js mit LitElement. Was sind die wesentlichen Unterschiede? Was sind die jeweiligen Vor- und Nachteile?</p>
    <br>
    <p class="antwort">
      <table border="1px solid black">
        <tr>
          <th>Name</th>
          <th>Vorteile</th>
        </tr>
        <tr>
          <td>Vue.js</td>
          <td>
            <ul>
              <li>Gute Dokumentation</li>
              <li>Lernkurve</li>
              <li>Weniger Restriktionen, mehr Flexibilität</li>
              <li>Performance</li>
              <li>Tooling</li>
              <li>Community</li>
              <li><a href="https://blog.codecentric.de/2018/02/vue-js-simple-make-complicated/">Quelle: codecentric</a></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>LitElement</td>
          <td>
            <ul>
              <li>Schnell</li>
              <li>klein</li>
              <li>leicht zu lernen</li>
              <li>kein framwork nötig</li>
            </ul>
          </td>
        </tr>
      </table>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>