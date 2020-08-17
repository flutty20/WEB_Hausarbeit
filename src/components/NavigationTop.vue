<template>
  <div>
    <button
      v-for="Kapitel in jsondata"
      v-bind:key="Kapitel"
      v-on:click="setNavigationLeft(Kapitel.Aufgaben)"
    >
      {{Kapitel.UebungName}}
    </button>
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

    
    setNavigationLeft(Aufgaben) {
      console.log("\n\n"+Aufgaben+"\n\n")
      this.$emit("setNavigationLeft",Aufgaben);
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