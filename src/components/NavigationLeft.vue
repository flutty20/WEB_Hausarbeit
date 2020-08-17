<template> 
<div>
    <button v-for="Kapitel in Aufgaben" v-bind:key="Kapitel" >
      {{Kapitel}} 
    </button>
</div>

</template>

<script>

export default {
  name: "navLeft",
  props: {

    Aufgaben:Array,


  },
  data: function () {
    return {
      
    };
  },

  methods: {
 
  },
  created() {
    
  },
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
</style>