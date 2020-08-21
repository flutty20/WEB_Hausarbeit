<template>
<div>
  <body>
    <h1>Einkaufsliste</h1>

    <label>Enter new Item</label>
    <input id="in"  type="text" />
    <button id="bt" >Add item</button>
    <ul id="liste"></ul>
    
  </body>
</div>
</template>

<script>
export default {
  name: "",
  props: {},

  mounted() {
    const ul = document.getElementById("liste");
    const input = document.getElementById("in");
    const button = document.getElementById("bt");

    button.onclick = function () {
      const listItem = document.createElement("li");

      listItem.innerHTML = `${input.value} <button>Delete</button>`;
      const delete_button = listItem.querySelector("button");
      delete_button.onclick = () => ul.removeChild(listItem);
      ul.appendChild(listItem);
      input.value = "";
      input.focus();
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>