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
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 8rem 5rem 80rem 5rem;
}

header {
  background-color: red;
  grid-column: 1/2;
  grid-row: 1/2;
}

article {
  background-color: blue;
  grid-column: 1/2;
  grid-row: 3/4;
}

aside.left {
  background-color: limegreen;
  grid-column: 1/2;
  grid-row: 2/3;
}

aside.right {
  background-color: magenta;
  grid-column: 1/2;
  grid-row: 4/5;
}

/* Responsive layout - when the screen is less than 300px wide, make the columns stack on top of each other instead of next to each other */
@media screen and (min-width: 600px) {
  body {
    display: grid;
    grid-template-columns: 1% 18% 1% 79% 1%;
    grid-template-rows: 1% 8rem 2% 60rem 1% 5rem 1%;
  }

  header {
    grid-column: 2/5;
    grid-row: 2/3;
  }

  aside.left {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  article {
    grid-column: 4/5;
    grid-row: 4/5;
  }

  aside.right {
    grid-column: 2/5;
    grid-row: 6/7;
  }
}

@media screen and (min-width: 800px) {
  body {
    display: grid;
    grid-template-columns: 1% 18% 2% 58% 2% 18% 1%;
    grid-template-rows: 2% 8rem 3% 40rem 2%;
  }

  header {
    grid-column: 2/7;
    grid-row: 2/3;
  }

  aside.left {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  aside.right {
    grid-column: 6/7;
    grid-row: 4/5;
  }

  article {
    grid-column: 4/5;
    grid-row: 4/5;
  }
}
</style>