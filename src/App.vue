<template>
  <div id="body">
    <header>
      <h1>WEB Hausarbeit</h1>
    </header>
    <nav>ö</nav>
    <aside>
      <ul>
        <li>
          <a class="active" href="#1">Erfolgsprinzipien des WWW</a>
        </li>
        <li>
          <a href="#2">HTML-Literatur</a>
        </li>
        <li>
          <a href="#3">HTML-Wireframe</a>
        </li>
        <li>
          <a href="#4">Wireframe mit HTML und CSS</a>
        </li>
        <li>
          <a href="#5">Mögliche Klausuraufgaben</a>
        </li>
      </ul>
    </aside>
    <article>c</article>
    <footer>d</footer>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#body {
  display: grid;
  grid-template-columns: 1% 18% 1% 79% 1%;
  grid-template-rows: 1% 8rem 4rem 60rem 1% 8rem 1%;
  grid-template-areas:
    ". . . . ."
    ". header header header ."
    ". nav nav nav ."
    ". aside . article . "
    ". . . . ."
    ". footer footer footer ."
    ". . . . . ";
}

header {
  background-color: red;
  grid-area: header;
}

nav {
  background-color: orange;
  grid-area: nav;
}

aside {
  background-color: limegreen;
  grid-area: aside;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f1f1f1;
  border: 1px solid #555;
}

li a {
  display: block;
  color: #000;
  padding: 10px 16px;
  text-decoration: none;
}

li {
  text-align: center;
  border-bottom: 1px solid #555;
}

li:last-child {
  border-bottom: none;
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
