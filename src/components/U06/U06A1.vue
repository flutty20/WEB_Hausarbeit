<template>
  <div>
    <p
      class="frage"
    >1.Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch paralleles Laden. Verwenden Sie dabei ausschließlich die Promise API ohne async / await.</p>
    <button @click="combine">Texte Kombinieren</button>
    <div id="U6A1"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    combine() {
      var div = document.getElementById("U6A1");
      var TextA;
      var TextB;
      div.innerHTML = "";

      Promise.all([
        fetch("./A1A.txt")
          .then((x) => x.text())
          .then((t) => (TextA = t.split("\n"))),

        fetch("./A1B.txt")
          .then((x) => x.text())
          .then((t) => (TextB = t.split("\n"))),
      ]).then(function () {
        for (
          let index = 0;
          index < TextA.length || index < TextB.length;
          index++
        ) {
          if (index < TextA.length) {
            if (index < TextB.length) {
              div.innerHTML += `<p>${TextA[index]}${TextB[index]}</p>`;
            } else {
              div.innerHTML += `<p>${TextA[index]}</p>`;
            }
          } else {
            div.innerHTML += `<p>${TextB[index]}</p>`;
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>