<template>
  <div id="body">
    <header>
      <h1>WEB Hausarbeit</h1>
    </header>

    <div id="logo">
      <img src="Logo.jpg" alt="Logo" width="100%" height="100%" />
    </div>

    <nav>
      <NavigationTop v-on:setNavigationLeft="setNavigationLeft"></NavigationTop>
    </nav>

    <aside>
      <NavigationLeft
        v-bind:Aufgaben="this.Aufgaben"
        v-on:loadAufgabe="loadAufgabe"
      ></NavigationLeft>
    </aside>

    <article>
      <component v-if="rooted" v-bind:is="aufgabe"></component>
      <router-view id="routerview"></router-view>
    </article>

    <footer>
      <a href=""> link zur Vorlesung</a>
    </footer>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<script>
import NavigationTop from "./components/NavigationTop.vue";
import NavigationLeft from "./components/NavigationLeft.vue";
import U01KA from "./components/U01/U01KA";

import U02A1 from "./components/U02/U02A1";
import U02A2 from "./components/U02/U02A2";
import U02A3 from "./components/U02/U02A3";
import U02A4 from "./components/U02/U02A4";
import U02KA from "./components/U02/U02KA";

import U03A1 from "./components/U03/U03A1";
import U03A2 from "./components/U03/U03A2";
import U03A3 from "./components/U03/U03A3";
import U03A4 from "./components/U03/U03A4";
import U03KA from "./components/U03/U03KA";

import U04A1 from "./components/U04/U04A1";
import U04A2 from "./components/U04/U04A2";
import U04KA from "./components/U04/U04KA";

import U05A1 from "./components/U05/U05A1";
import U05A2 from "./components/U05/U05A2";
import U05A3 from "./components/U05/U05A3";
import U05KA from "./components/U05/U05KA";

import U06A1 from "./components/U06/U06A1";
import U06A2 from "./components/U06/U06A2";
import U06A3 from "./components/U06/U06A3";
import U06KA from "./components/U06/U06KA";

import U07A1 from "./components/U07/U07A1.vue";
import U07A2 from "./components/U07/U07A2.vue";
import U07A3 from "./components/U07/U07A3.vue";
import U07KA from "./components/U07/U07KA";

import U08A1 from "./components/U08/U08A1";
import U08A2 from "./components/U08/U08A2";
import U08A3 from "./components/U08/U08A3";
import U08KA from "./components/U08/U08KA";

import U09A1 from "./components/U09/U09A1";
import U09A2 from "./components/U09/U09A2";

import U10A1 from "./components/U10/U10A1";
import U10A2 from "./components/U10/U10A2";
import U10A3 from "./components/U10/U10A3";
import U10KA from "./components/U10/U10KA";

import U11A1 from "./components/U11/U11A1";
import U11A2 from "./components/U11/U11A2";
import U11KA from "./components/U11/U11KA";

import U12A1 from "./components/U12/U12A1";
import U12A2 from "./components/U12/U12A2";
import U12A3 from "./components/U12/U12A3";

import U13A1 from "./components/U13/U13A1";
import U13KA from "./components/U13/U13KA";

import U14A1 from "./components/U14/U14A1";
import U14A2 from "./components/U14/U14A2";
import U14A3 from "./components/U14/U14A3";
import U14KA from "./components/U14/U14KA";

export default {
  name: "App",
  components: {
    NavigationTop,
    NavigationLeft,
    U01KA,
    U02A1,
    U02A2,
    U02A3,
    U02A4,
    U02KA,
    U03A1,
    U03A2,
    U03A3,
    U03A4,
    U03KA,
    U04A1,
    U04A2,
    U04KA,
    U05A1,
    U05A2,
    U05A3,
    U05KA,
    U06A1,
    U06A2,
    U06A3,
    U06KA,
    U07A1,
    U07A2,
    U07A3,
    U07KA,
    U08A1,
    U08A2,
    U08A3,
    U08KA,
    U09A1,
    U09A2,
    U10A1,
    U10A2,
    U10A3,
    U10KA,
    U11A1,
    U11A2,
    U11KA,
    U12A1,
    U12A2,
    U12A3,
    U13A1,
    U13KA,
    U14A1,
    U14A2,
    U14A3,
    U14KA,
  },
  data: function() {
    return {
      Aufgaben: Array,
      aufgabe: String,
      rooted: true,
    };
  },
  updated: function() {
    console.log(document.getElementById("routerview").innerText.length > 0);
    this.rooted = !(document.getElementById("routerview").innerText.length > 0);
    console.log("rooted:", this.rooted);
  },

  methods: {
    testrouter() {
      var x = document.getElementById("routerview");
      console.log(x);
    },
    loadAufgabe(schluessel) {
      this.rooted = true;
      this.aufgabe = schluessel;
      document.getElementById("routerview").innerText = null;
      console.log(schluessel);
    },
    setNavigationLeft(Aufgaben) {
      this.Aufgaben = Aufgaben;
    },
  },
};
</script>

<style>
#body {
  display: grid;
  grid-template-columns: 1% 18% 80% 1%;
  grid-template-rows: 1vh 10vh 11vh 66vh 1vh 9vh;
  grid-template-areas:
    ". . . ."
    ". header header ."
    ". logo nav ."
    ". aside article . "
    ". . .  ."
    ". footer footer .";
}

header {
  background-color: red;
  grid-area: header;
}
header h1 {
  text-align: center;
}
#logo {
  grid-area: logo;
  background-color: darkviolet;
}
nav {
  background-color: orange;
  grid-area: nav;
}
nav div {
  width: 100%;
  padding: auto;
  display: inline-block;
  text-align: center;
}

aside {
  background-color: blue;
  grid-area: aside;
}

article {
  background-color: green;
  grid-area: article;
  overflow-y: auto;
  padding: 10px;
}

footer {
  background-color: magenta;
  grid-area: footer;
}
.frage {
  margin: 0%;
  padding: 0%;
  font-weight: bold;
}
.antwort {
  margin: 0%;
  padding: 0%;
}

/* Responsive layout - when the screen is less than 800px wide, make last column stack on top of the other */
@media screen and (max-width: 800px) {
  #body {
    display: grid;
    grid-template-columns: 1% 98% 1%;
    grid-template-rows: 1vh 11vh 11vh 10vh 60vh 1vh 5vh;
    grid-template-areas:
      ". . . "
      ". header ."
      ". nav ."
      ". aside . "
      ".article ."
      ". . ."
      ". footer .";
  }
  aside div {
    width: auto;
    margin: 0 auto;
    display: inline-block;
    text-align: center;
  }
}
</style>
