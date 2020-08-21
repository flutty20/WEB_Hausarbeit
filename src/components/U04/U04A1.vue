<template>
  <div>
    <input id="in1" class="in" type="text" placeholder="Parameta1 =x" />
    <input id="in2" class="in" type="text" placeholder="Parameta2 =y" />
    <br />
    <label id="la1" class="la">{{ergebnis1}}</label>
    <br />
    <label id="la2" class="la">{{ergebnis2}}</label>
    <p
      class="frage"
    >1.Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.</p>
    <button id="bt1" class="bt" @click="A1(getParameta1())">identity_function(x)</button>
    <p
      class="frage"
    >2.Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.).</p>
    <button id="bt1" class="bt" @click="A2(getParameta1())(getParameta2())">addf(x)(y)</button>
    <p
      class="frage"
    >3.Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.</p>
    <button id="bt1" class="bt" @click="A3(mul)(getParameta1())(getParameta2())">applyf(mul)(x)(y)</button>
    <p
      class="frage"
    >4.Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.</p>
    <button id="bt1" class="bt" @click="A4(mul,getParameta1())(getParameta2())">curry(mul,x)(y)</button>
    <p
      class="frage"
    >5.Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?</p>
    <button id="bt1" class="bt" @click="A5(getParameta1())">inc(x)</button>
    <p
      class="frage"
    >6.Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.</p>
    <p
      class="frage"
    >7.Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.</p>
    <p
      class="frage"
    >8.Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.</p>
    <p
      class="frage"
    >9.Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.</p>
    <p
      class="frage"
    >10.Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.</p>
    <p
      class="frage"
    >11.Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.</p>
    <p class="frage">
      12.Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler. Z.B.
      <br />temp = revocable(alert);
      <br />temp.invoke(7); // führt zu alert(7);
      <br />temp.revoke();
      <br />temp.invoke(8); // Fehlerabbruch!
    </p>
    <p
      class="frage"
    >13.Implementieren Sie ein "Array Wrapper"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.</p>
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
    };
  },

  methods: {
    getParameta1() {
      return document.getElementById("in1").value;
    },
    getParameta2() {
      return document.getElementById("in2").value;
    },

    A1(parameta1) {
      document.getElementById("la1").innerHTML = function () {
        return parameta1;
      };
      document.getElementById("la2").innerHTML = "parameta1: " + parameta1;
      return function () {
        return parameta1;
      };
    },
    A2(parameta1) {
      let _this = this;
      return (this.ergebnis1 = function addf(parameta2) {
        return (_this.ergebnis2 = parseInt(parameta1) + parseInt(parameta2));
      });
    },
    A3(a) {
      let _this = this;
      return (this.ergebnis1 = function applyf(b) {
        return function applyf(c) {
          return (_this.ergebnis2 = a(b, c));
        };
      });
    },
    mul(x, y) {
      return x * y;
    },
    A4(a, b) {
      let _this = this;
      return (this.ergebnis1 = function curry(c) {
        return (_this.ergebnis2 = a(b, c));
      });
    },
    A5(x) {
      return (this.ergebnis1 = this.addf(x)(1));
    },
    addf(x) {
       let _this = this
      return function addf(y) {
        return (_this.ergebnis2 = (parseInt(x) + parseInt(y)));
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>