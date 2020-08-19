<template>
  <div id="body">
    <header>
      <h1>WEB Hausarbeit</h1>
    </header>
    <nav>
      <ul>
        <NavigationTop v-on:setNavigationLeft="setNavigationLeft"></NavigationTop>
      </ul>
    </nav>

    <aside>
      <ul>
        <NavigationLeft v-bind:Aufgaben="this.Aufgaben" v-on:loadAufgabe="loadAufgabe"></NavigationLeft>
      </ul>
    </aside>

    <article>
      <component v-bind:is="aufgabe"></component>
    </article>

    <footer></footer>
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
    U03KA
  },
  data: function () {
    return {
      Aufgaben: Array,
      aufgabe: String,
    };
  },
  methods: {
    loadAufgabe(schluessel) {
      this.aufgabe = schluessel;
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
  grid-template-rows: 1% 8rem 4rem 60rem 1% 8rem 1%;
  grid-template-areas:
    ". . . ."
    ". header header ."
    ". . nav ."
    ". aside article . "
    ". . .  ."
    ". footer footer ."
    ". . .  . ";
}

header {
  background-color: red;
  grid-area: header;
}
header h1 {
  text-align: center;
}
nav {
  background-color: orange;
  grid-area: nav;
}

aside {
  background-color: limegreen;
  grid-area: aside;
}

aside ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f1f1f1;
  border: 1px solid #555;
}

article {
  background-color: blue;
  grid-area: article;
}

footer {
  background-color: magenta;
  grid-area: footer;
}

/* Responsive layout - when the screen is less than 800px wide, make last column stack on top of the other */
@media screen and (max-width: 800px) {
  #body {
    display: grid;
    grid-template-columns: 1% 98% 1%;
    grid-template-rows: 1% 8rem 4rem 4rem 60rem 1% 8rem 1%;
    grid-template-areas:
      ". . . "
      ". header ."
      ". nav ."
      ". aside . "
      ".article ."
      ". . ."
      ". footer ."
      ". . .";
  }
}
</style>
