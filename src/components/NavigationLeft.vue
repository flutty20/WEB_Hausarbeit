<template> 
<div>
  
    <li v-for="Kapitel in jsondata" v-bind:key="Kapitel" >
      <a v-bind:href="Kapitel.UebungName">  {{Kapitel.UebungName}} </a>
    </li>
</div>

</template>

<script>
import json from "../JSON/nav.json";
export default {
  name: "nav",
  props: {

    Aufgaben:Array,


  },
  data: function () {
    return {
      jsondata: null,
    };
  },

  methods: {
 
  },
  created() {
    this.jsondata = json.nav;
    console.log(this.jsondata);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>