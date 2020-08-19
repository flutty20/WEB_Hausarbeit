<template>
<div>
  <body>
    <header></header>
    <aside class="left"></aside>
    <article></article>
    <aside class="right"></aside>
  </body>
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
* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-wrap: wrap;
}

header {
  background-color: red;
  width: 98%;
  height: 8rem;
  margin: 1%;
}

aside {
  width: 18%;
  margin: 1%;
}

aside.left {
  background-color: limegreen;
}

aside.right {
  background-color: magenta;
}

article {
  background-color: blue;
  width: 58%;
  height: 40rem;
  margin: 1%;
}

/* Responsive layout - when the screen is less than 600px wide, make last column stack on top of the other */
@media screen and (max-width: 800px) {
  aside.left {
    margin: 1% 0.5% 0.5% 1%;
    width: 18.5%;
  }

  aside.right {
    width: 99%;
    height: 5rem;
    margin: 0.5% 1%;
  }

  article {
    width: 78.5%;
    height: 60rem;
    margin: 1% 1% 0.5% 0.5%;
  }
}

/* Responsive layout - when the screen is less than 300px wide, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  header {
    width: 100%;
    margin: 0%;
  }

  article {
    height: 80rem;
    width: 100%;
    margin: 0%;
  }

  aside.left {
    width: 100%;
    margin: 0%;
    height: 5rem;
  }

  aside.right {
    width: 100%;
    margin: 0%;
    height: 5rem;
  }
}
</style>