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
    >1.Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.</p>
    <button class="bt" @click="identity_function(getParameta1())()">identity_function(x)</button>
    <p
      class="frage"
    >2.Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.).</p>
    <button class="bt" @click="addf(getParameta1())(getParameta2())">addf(x)(y)</button>
    <p
      class="frage"
    >3.Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.</p>
    <button class="bt" @click="applyf(mul)(getParameta1())(getParameta2())">applyf(mul)(x)(y)</button>
    <p
      class="frage"
    >4.Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.</p>
    <button class="bt" @click="curry(mul,getParameta1())(getParameta2())">curry(mul,x)(y)</button>
    <p
      class="frage"
    >5.Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?</p>
    <button class="bt" @click="inc(getParameta1())">inc(x)</button>
    <p
      class="frage"
    >6.Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.</p>
    <button class="bt" @click="methodize(add)">methodize(add)</button>
    <p
      class="frage"
    >7.Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.</p>
    <button class="bt" @click="demethodize(add)">demethodize(add)</button>
    <p
      class="frage"
    >8.Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.</p>
    <button class="bt" @click="twice(add)">twice(add)</button>
    <p
      class="frage"
    >9.Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.</p>
    <button
      class="bt"
      @click=" composeu(double, square)(getParameta1())"
    >composeu(double, square)(x)</button>
    <p
      class="frage"
    >10.Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.</p>
    <button
      class="bt"
      @click="composeb(add, mul)(getParameta1(),getParameta2(),getParameta3())"
    >composeb(add, mul)(x,y,z)</button>
    <p
      class="frage"
    >11.Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.</p>
    <button class="bt" @click="add_once(getParameta1(), getParameta2()) ">add_once(x, y)</button>
    <p
      class="frage"
    >12.Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.</p>
    <button class="bt" @click="counter.inc()">counter.inc()</button>
    <button class="bt" @click="counter.dec()">counter.dec()</button>
    <p class="frage">
      13.Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler. Z.B.
      <br />temp = revocable(alert);
      <br />temp.invoke(7); // führt zu alert(7);
      <br />temp.revoke();
      <br />temp.invoke(8); // Fehlerabbruch!
    </p>
    <button class="bt" @click="temp.invoke(getParameta1())">temp.invoke(x)</button>
    <button class="bt" @click="temp.revoke()">temp.revoke()</button>
    <p
      class="frage"
    >14.Implementieren Sie ein "Array Wrapper"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.</p>
    <button class="bt" @click="arrayW.get()">arrayW.get()</button>
    <button class="bt" @click="arrayW.store(getParameta1())">arrayW.store(x)</button>
    <button class="bt" @click="arrayW.append(getParameta1())">arrayW.geappendt(x)</button>
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
      square: this.twice(this.mul),
      double: this.twice(this.add),
      add_once: this.once(this.add),
      counter: this.counterf(10),
      //temp: this.revocable(this.alert),
      arrayW: this.arrayWrapper(),
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
    identity_function(x) {
      let _this = this;
      return (this.ergebnis1 = function fu() {
        return (_this.ergebnis2 = x);
      });
    },
    //A2
    addf(x) {
      let _this = this;
      return (this.ergebnis1 = function addf(y) {
        return (_this.ergebnis2 = parseInt(x) + parseInt(y));
      });
    },
    //A3
    applyf(a) {
      let _this = this;
      return (this.ergebnis1 = function applyf(x) {
        return function applyf(y) {
          return (_this.ergebnis2 = a(x, y));
        };
      });
    },
    mul(x, y) {
      return x * y;
    },
    //A4
    curry(a, x) {
      let _this = this;
      return (this.ergebnis1 = function curry(y) {
        return (_this.ergebnis2 = a(x, y));
      });
    },
    //A5
    inc(x) {
      return (this.ergebnis1 = this.addf_(x)(1));
    },
    addf_(x) {
      let _this = this;
      return function addf(y) {
        return (_this.ergebnis2 = parseInt(x) + parseInt(y));
      };
    },
    //A6?
    methodize(fu) {
      return (this.ergebnis1 = function (x) {
        return fu(this.valueOf(), x);
      });
    },
    add(x, y) {
      return (this.ergebnis2 = parseInt(x) + parseInt(y));
    },
    //A7?
    demethodize(fu) {
      return (this.ergebnis1 = function (x, y) {
        return fu.call(x, y);
      });
    },
    //A8
    twice(fu) {
      return (this.ergebnis1 = function (a) {
        return fu(a, a);
      });
    },
    //A9
    composeu(fu1, fu2) {
      let _this = this;
      return (this.ergebnis1 = function (x) {
        return (_this.ergebnis2 = fu2(fu1(x)));
      });
    },
    //A10
    composeb(fu1, fu2) {
      let _this = this;
      return (this.ergebnis1 = function (x, y, z) {
        return (_this.ergebnis2 = fu2(fu1(x, y), z));
      });
    },
    //A11
    once(fu) {
      let _this = this;
      let flag = true;
      return (this.ergebnis1 = function (x, y) {
        if (flag) {
          flag = false;
          return (_this.ergebnis2 = fu(x, y));
        }
        console.log("Fehelr");
      });
    },
    //A12
    counterf(x) {
      let _this = this;
      return (this.ergebnis1 = {
        inc: function () {
          return (_this.ergebnis2 = ++x);
        },
        dec: function () {
          return (_this.ergebnis2 = --x);
        },
      });
    },
    //A13
    revokeable(fu) {
      let _this = this;
      let flag = true;
      return (this.ergebnis1 = {
        invoke: function (x) {
          if (flag) {
            return (_this.ergebnis2 = fu(x));
          } else {
            _this.ergebnis2 = "Fehler!";
            console.log("Fehler!");
          }
        },
        revoke: function () {
          return (flag = false);
        },
      });
    },
    alert(x) {
      return x;
    },
    //A14
    arrayWrapper() {
      let _this = this;
      let arr = [];
      return (this.ergebnis1 = {
        get: function () {
          return (_this.ergebnis2 = arr);
        },
        store: function (x) {
          return (_this.ergebnis2 = arr = x);
        },
        append: function (x) {
          _this.ergebnis2 = arr.push(x);
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>