<template>
  <div>
    <button
      v-for="(aufgabe, schluessel) in Aufgaben"
      v-bind:key="schluessel"
      @click="loadAufgabe(schluessel)"
    >
      {{ aufgabe }}
    </button>
  </div>
</template>

<script>
export default {
  name: "navLeft",
  props: {
    Aufgaben: Array,
  },
  data: function() {
    return {};
  },

  methods: {
    loadAufgabe(schlussel) {
      this.$emit("loadAufgabe", schlussel);
      location.hash = schlussel;
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 800px) {
  div {
    display: inline-block;
  }
}
</style>
