<template>
  <div id="body">
    <header>a</header>
    <nav>ö</nav>
    <aside>b</aside>
    <article>c</article>
    <footer>d</footer>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
 /*  * {
            box-sizing: border-box;
        }*/

        #body {
            display: grid;
            grid-template-columns: 1% 18% 1% 79% 1%;
            grid-template-rows: 2% 8rem 4rem 60rem 2% 8rem 2%;
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
            background-color:orange;
            grid-area: nav;
        }

        aside{
            background-color: limegreen;
            grid-area: aside;
        }

        article {
            background-color: blue;
             grid-area: article;
        }

        footer{
            background-color: magenta;
            grid-area: footer;
        }
</style>
