<template>
  <div>
    <h1>Mögliche Klausuraufgaben</h1>
    <p class="frage">Wann und wie kollabieren Margins?</p>
    <p class="antwort">Wenn margin gröser ist als die zugewiesene fläsche</p>
<br>
    <p class="frage">Was bedeutet „position: static“</p>
    <p class="antwort">
      Die position Eigenschaft legt die Positionsart eines Elements fest. Für die Positionierung selbst werden die Eigenschaften top, right, bottom oder left verwendet.
      static:Standardwert. Das Element ist im normalen Fluss. Die Eigenschaften top, right, bottom oder left haben keine Auswirkungen.
    <a href="https://developer.mozilla.org/de/docs/Web/CSS/position">Quelle:MDN</a>
    </p>
    
<br>
    <p class="frage">Was bedeutet „position:fixed“</p>
    <p class="antwort">
      Die position Eigenschaft legt die Positionsart eines Elements fest. Für die Positionierung selbst werden die Eigenschaften top, right, bottom oder left verwendet.
      fixed: Die Verschiebung orientiert sich am Viewport. Das Element wird aus dem normalen Fluss gelöst und bleibt auch beim Scrollen an seiner fest definierten Position. Beim Drucken wird das Element auf jeder Seite an der positionierten Stelle angezeigt.
    <a href="https://developer.mozilla.org/de/docs/Web/CSS/position">Quelle:MDN</a>
    </p>
    
<br>
    <p class="frage">Was bedeutet die CSS-Regel "display: inline-block;"</p>
    <p class="antwort">Elemente mit display: inline; erzeugen eine oder mehrere Inline-Boxen. Inline-Boxen verlaufen auf einer Zeile horizontal in der Schreibrichtung der verwendeten Sprache. Im Deutschen also von links nach rechts, in hebräischen oder arabischen Texten von rechts nach links. Eine Inline-Box wird in mehrere Teile zerlegt, wenn sie nicht in einer Zeile Platz hat oder Zeilenumbrüche enthält.
    <a href=https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Anzeige/display>Quelle:SELFHTML</a>
    </p>
    
<br>
    <p class="frage">Was ist der Unterschied zwischen einer Block-Box und einer Inline-Box?</p>
    <p class="antwort">Inline-Boxen verlaufen auf einer Zeile horizontal.Block-Boxen nehmen die gesamte Breite des Elternelementes ein. Sie sind so hoch wie ihr Inhalt.
      <a href="https://webzeugkoffer.de/css-block-vs-inline">Quelle: webzeugkoffer</a>
    </p>
<br>
    <p
      class="frage"
    >Wie sorgt man dafür, dass Umlaute auf einer Webseite korrekt dargestellt werden?</p>
    <p class="antwort">mit charset=utf-8 in Der Hadder Datei oder uber sonderzeichen
      <br>  ä = &amp;auml;, 
      <br>  Ä = &amp;Auml;
      <br>  ö = &amp;ouml;
      <br>  Ö = &amp;Ouml;
      <br>  ü = &amp;uuml;
      <br>  Ü = &amp;Uuml; </p>
<br>
    <p class="frage">Wie zentriert man ein Bild (img) in einem DIV horizontal?</p>
    <p class="antwort">
        display: block;
        margin: 0 auto;</p>
<br>
    <p class="frage">Wie erreicht man horizontale und vertikale Zentrierung eines Bildes?</p>
    <p class="antwort"> 
        img{  
      <br>max-height: 100%;  
      <br>max-width: 100%; 
      <br>position: absolute;  
      <br>top: 0;  
      <br>bottom: 0;  
      <br>left: 0;  
      <br>right: 0;  
      <br>margin: auto;
    }</p>
<br>
    <p class="frage">Wie ist das HTML-Tag div definiert?</p>
    <p class="antwort">DIV ist ein Block-Element. Ein DIV nimmt die komplette Breite ein, sofern nichts anderes in CSS umdefiniert wurde.
      <a href=https://www.html-seminar.de/div_und_spans.htm>Quelle:HTML</a>
    </p>
<br>
    <p class="frage">Ist HTML5 case sensitive?</p>
    <p class="antwort">Ja</p>
<br>
    <p class="frage">Wie ist das HTML-Tag span definiert?</p>
    <p class="antwort">SPAN dagegen kann innerhalb eines Bereiches angewendet werden – SPAN ist ein Inline-Element.
     <a href=https://www.html-seminar.de/div_und_spans.htm>Quelle:HTML</a>
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
<style scoped>
</style>