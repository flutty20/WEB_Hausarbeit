<template>
  <div>
    <button
      v-for="Kapitel in jsondata"
      v-bind:key="Kapitel"
      v-on:click="setNavigationLeft(Kapitel)"
    >{{Kapitel.UebungName}}</button>
  </div>
</template>


<script>
import json from "../JSON/nav.json";
export default {
  name: "NavTop",
  props: {},
  data: function () {
    return {
      jsondata: null,
    };
  },

  methods: {
    setNavigationLeft(Kapitel) {
      console.log("\n\n" + Kapitel.Aufgaben + "\n\n");
      this.$emit("setNavigationLeft", Kapitel.Aufgaben);
      location.hash = Kapitel.UebungName;
    },
  },
  created() {
    this.jsondata = json.nav;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>