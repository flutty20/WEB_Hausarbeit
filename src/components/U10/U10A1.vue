//App.vue
<template>
  <div id="app">
    <Counter />
    <Counter />
  </div>
</template>

<script>
//importieren des Counter.vue
import Counter from "./U10A1_Counter";

export default {
  name: "app",
  components: {
    //coponente hinzufügen
    Counter,
  },
};
</script>

<style scoped></style>
