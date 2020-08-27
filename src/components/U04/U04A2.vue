<template>
  <div>
    <input id="in1" class="in" type="text" placeholder="Parameta1 =x" />
    <input id="in2" class="in" type="text" placeholder="Parameta2 =y" />
    <input id="in3" class="in" type="text" placeholder="Parameta3 =z" />
    <br />
    <label id="la1" class="la">ergebnis1: {{ergebnis1}}</label>
    <br />
    <label id="la2" class="la">ergebnis2: {{ergebnis2}}</label>
    <p
      class="frage"
    >1.Schreiben Sie eine JavaScript-Fabrikfunktion für Warteschlangen (FIFO-Prinzip). Fabrikfunktionen erzeugen Objekte. Privatisieren Sie so viel wie möglich. Schreiben Sie Tests für Ihre Implementierung.</p>
    <button class="bt" @click="a1.in(getParameta1())">fifo.in(x)</button>
    <button class="bt" @click="a1.out()">fifo.out()</button>
    <button class="bt" @click="a1.print()">fifo.print()</button>
    <p
      class="frage"
    >2.Schreiben Sie eine JavaScript-Fabrikfunktion für ungeordnete Mengen. In ungeordneten Mengen tritt kein Element mehrfach auf. Privatisieren Sie so viel wie möglich. Schreiben Sie Tests für Ihre Implementierung.</p>
    <button class="bt" @click="a2.in(getParameta1())">unMengen.in(x)</button>
    <button class="bt" @click="a2.out(getParameta1())">unMengen.out(x)</button>
    <button class="bt" @click="a2.print()">unMengen.print()</button>

    <p
      class="frage"
    >3.Schreiben Sie eine JavaScript-Fabrikfunktion für ungeordnete Multi-Mengen. In ungeordneten Multi-Mengen dürfen Elemente mehrfach auftreten. Privatisieren Sie so viel wie möglich. Schreiben Sie Tests für Ihre Implementierung.</p>
    <button class="bt" @click="a3.in(getParameta1())">muMengen.in(x)</button>
    <button class="bt" @click="a3.outOne(getParameta1())">muMengen.outOne(x)</button>
    <button class="bt" @click="a3.outAll(getParameta1())">muMengen.outAll(x)</button>
    <button class="bt" @click="a3.print()">muMengen.print()</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data: function () {
    return {
      ergebnis1: Object,
      ergebnis2: Object,
      a1: this.fifo(),
      a2: this.unMengen(),
      a3: this.muMengen(),
    };
  },
  methods: {
    getParameta1() {
      return document.getElementById("in1").value;
    },
    getParameta2() {
      return document.getElementById("in2").value;
    },
    getParameta3() {
      return document.getElementById("in3").value;
    },
    //A1
    fifo() {
      let _this = this;
      let arr = [];
      return (this.ergebnis1 = {
        in: function (x) {
          return (_this.ergebnis2 = arr.unshift(x));
        },
        out: function () {
          return (_this.ergebnis2 = arr.pop());
        },
        print: function () {
          console.log(arr);
          return (_this.ergebnis2 = arr);
        },
      });
    },
    //A2
    unMengen() {
      let _this = this;
      var arr = [];
      return (this.ergebnis1 = {
        in: function (x) {
          if (arr.includes(x)) {
            _this.ergebnis2 = "Fehler '" + x + "' ist schon in der Menge";
            console.log("Fehler '" + x + "' ist schon ine der Menge");
          } else {
            _this.ergebnis2 = arr.push(x);
          }
        },
        out: function (x) {
          if (!arr.includes(x)) {
            _this.ergebnis2 = "Fehler '" + x + "' ist nicht in der Menge";
            console.log("Fehler '" + x + "' ist nicht in der Menge");
          } else {
            if (arr.length == 1) {
              _this.ergebnis2 = arr.pop();
            } else {
              _this.ergebnis2 = arr.splice(arr.indexOf(x), 1);
            }
          }
        },
        print: function () {
          console.log(arr);
          return (_this.ergebnis2 = arr);
        },
      });
    },
    //A3
    muMengen() {
      let arr = [];
      let _this = this;
      return {
        in: function (x) {
          _this.ergebnis2 = arr.push(x);
        },
        outAll: function all(x) {
          if (!arr.includes(x)) {
            _this.ergebnis2 = "Alle '" + x + "' Aus der muMeng entfernt";
            console.log("Alle '" + x + "' Aus der muMeng entfernt");
          } else {
            _this.ergebnis2 = arr.splice(arr.indexOf(x), 1);
            all(x);
          }
        },
        outOne: function (x) {
          if (!arr.includes(x)) {
            _this.ergebnis2 = "Fehler '" + x + "' ist nicht in der Menge";
            console.log("Fehler '" + x + "' ist nicht in der Menge");
          } else {
            _this.ergebnis2 = arr.splice(arr.indexOf(x), 1);
          }
        },
        print: function () {
          _this.ergebnis2 = arr;
          console.log(arr);
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>