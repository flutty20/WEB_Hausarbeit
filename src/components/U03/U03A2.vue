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
  width: 100%;
  height: 8rem;
}

article {
  background-color: blue;
  height: 80rem;
  width: 100%;
}

aside.left {
  background-color: limegreen;
}

aside.right {
  background-color: magenta;
}

aside {
  width: 100%;
  height: 5rem;
}

@media screen and (min-width: 500px) {
  header {
    width: 98%;
    margin: 1%;
  }

  aside.left {
    width: 18.5%;
    height: auto;
    margin: 1% 0.5% 0.5% 1%;
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

@media screen and (min-width: 800px) {
  aside.left {
    width: 18%;
    margin: 1%;
  }

  aside.right {
    width: 18%;
    margin: 1%;
    height: auto;
  }

  article {
    width: 58%;
    height: 40rem;
    margin: 1%;
  }
}
</style>