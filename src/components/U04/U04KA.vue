<template>
  <div>
    <p class="frage">
      Über welche Art der Typisierung verfügt die Programmiersprache JavaScript?
    </p>
    <p class="antwort">
      Primitive Datentypen: string, number, boolean, symbol, undefined
      <br />Nicht primitive Datentypen: function, object
    </p>
    <br />
    <p class="frage">Was ist der Datentyp des typeof-Operators?</p>
    <p class="antwort">
      typeof gibt einen String zurück, der den Typ des Operanden identifiziert
    </p>
    <br />
    <p class="frage">Was ist der Datentyp von [1,2,3]?</p>
    <p class="antwort">Array(Objekt)</p>
    <br />
    <p class="frage">
      Was ergibt der JavaScript-Ausdruck 0.1+0.2==0.3 ? Begründen Sie Ihr
      Ergebnis!
    </p>
    <p class="antwort">false</p>
    <br />
    <p class="frage">Welchen Wert ergibt folgender Ausdruck: a = 3; a == '3'</p>
    <p class="antwort">true</p>
    <br />
    <p class="frage">Welchen Wert ergibt folgender Ausdruck: false === false</p>
    <p class="antwort">true</p>
    <br />
    <p class="frage">Geben Sie ein Beispiel, für das "==" intransitiv ist.</p>
    <p class="antwort">
      '1' == 1 //true <br />1 == '1.0' //true <br />'1' == '1.0'//false
    </p>
    <br />
    <p class="frage">Wie greift man auf alle Argumente einer Funktion zu?</p>
    <p class="antwort">über die übergabeparameter</p>
    <br />
    <p class="frage">
      Wie kann man die Liste aller Argumente einer Funktion in ein Array
      umwandeln?
    </p>
    <p class="antwort">über eine funktion</p>
    <br />
    <p class="frage">
      Wie ist in JavaScript die reduce()-Methode definiert?
    </p>
    <p class="antwort">
      reduziert eine Liste auf einen Wert [1,2,3,4].reduce( 0,(x, y)=>x+y )
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
