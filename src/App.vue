<template>
  <div id="body">
    <header>
      <h1>WEB Hausarbeit</h1>
    </header>
    <nav>
      <ul>
       <NavigationTop v-on:setNavigantionLeft="setNavigantionLeft"></NavigationTop>
      </ul>
    </nav>

    <aside>
      <ul>
        <NavigationLeft v-bind:Aufgaben="this.Aufgaben"></NavigationLeft>
      </ul>
    </aside>

    <article>c</article>


    <footer>d</footer>

  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import NavigationTop from "./components/NavigationTop.vue"
import NavigationLeft from "./components/NavigationLeft.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    NavigationTop,
    NavigationLeft

  },
  data: function () {
    return {
      Aufgaben:Array,
    };
  },
  methods: {
    setNavigationLeft(Aufgaben) {

      this.Aufgaben = Aufgaben
     
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

nav ul {
  overflow: hidden;
  background-color: #333;
  position: sticky;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 22px 16px;
  text-decoration: none;
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

aside li a {
  display: block;
  color: #000;
  padding: 10px 16px;
  text-decoration: none;
}

li {
  text-align: center;
  border: 1px solid #555;
}

li a.active {
  background-color: darkgreen;
  color: white;
}

li a:hover:not(.active) {
  background-color: green;
  color: white;
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
