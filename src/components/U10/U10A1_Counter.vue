//Counter.vue
<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>+:{{add}} -:{{sub}} count:{{sum}}</p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      add: 0,
      sub: 0,
      sum: 0,
    };
  },
  methods: {
    increment: function () {
      this.sum++;
      this.add++;
    },
    decrement: function () {
      this.sum--;
      this.sub++;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
button {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 24px;
  cursor: pointer;
}
button:hover {
  background: #666;
}

</style>