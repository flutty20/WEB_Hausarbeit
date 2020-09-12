<template>
  <div>
    <p
      class="frage"
    >2.Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch paralleles Laden. Verwenden Sie dabei ausschließlich die async / await ohne Promise API .</p>
    <button @click="combine()()">Texte Kombinieren</button>

    <div id="U6A2"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  methods: {
    combine() {
      const div = document.getElementById("U6A2");
      var TextA;
      var TextB;
      div.innerHTML = "";
      async function fetchToTextarry(url1, url2) {
        try {
          var response1 = await fetch(url1);
          response1 = await response1.text();
          response1 = response1.split("\n");
          var response2 = await fetch(url2);
          response2 = await response2.text();
          response2 = response2.split("\n");
          return {
            t1: response1,
            t2: response2,
          };
        } catch (error) {
          console.log(`ERROR: ${error.stack}`);
        }
      }
      fetchToTextarry("./A1A.txt", "./A1B.txt")
        .then(function (t) {
          TextA = t.t1;
          TextB = t.t2;
        })
        .then(function () {
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