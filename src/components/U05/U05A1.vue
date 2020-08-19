<template>
<div>
  <body>
    <h1>Einkaufsliste</h1>

    <label>Enter new Item</label>
    <input type="text" />
    <button>Add item</button>

    <ul></ul>
  </body>
</div>
</template>

<script>
export default {
  name: "",
  props: {},

 created() {

    this.property = 'Example property update.'

    console.log('propertyComputed will update, as this.property is now reactive.')

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>