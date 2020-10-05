<template>
  <div>
    <h1>Mögliche Klausuraufgaben</h1>
    <p class="frage">
      Übersetzen Sie die setTimeout-Funktion in die Promise-Schreibweise.
    </p>
    <p class="antwort">
      Promise.then(onFulfilled, onRejected)
      <a
        href="https://www.geeksforgeeks.org/how-to-wrap-settimeout-method-in-a-promise/#:~:text=How%20to%20wrap%20setTimeout()%20method%20in%20a%20promise%20%3F,-Last%20Updated%3A%2022&text=To%20wrap%20setTimeout%20in%20a,failure%20conditions%20of%20the%20Promise."
        >Quelle: geeksforgeeks</a
      >
    </p>
    <br />
    <p class="frage">
      Übersetzen Sie die Promise-Schreibweise in async / await.
    </p>
    <p class="antwort">Tim Berners-Lee</p>
    <br />
    <p class="frage">
      Wie können Sie mit der fetch-API zwei Dateien 'A.json' und 'B.json'
      parallel vom Server laden und deren Inhalte auf der Konsole ausgeben?
      Geben Sie 2 Lösungen an, (a) Promise-Syntax (b) async / await.
    </p>
    <p class="antwort">Tim Berners-Lee</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
