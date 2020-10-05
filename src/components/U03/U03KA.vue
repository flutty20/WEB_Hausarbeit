<template>
  <div>
    <h1>Mögliche Klausuraufgaben</h1>
    <p class="frage">
      Was versteht man unter der Design-Methode "Mobile First"? Geben Sie mit
      einer CSS-Regel ein Grid-Layout für body an, das bei schmalen Bildschirmen
      (Handys) die Abschnitte (section) untereinander und bei breiten
      Bildschirmen nebeneinander darstellt.
    </p>
    <p class="antwort">
      Mobile First: ist eine Design-Methode die mit der entwicklung von einem
      kleinen bildschirm startet und dann mit responsive Design auf größere
      bildschirme umbaut.
      <br />Grid-Layout: zeichnet sich dadurch aus, dass eine Seite in
      Hauptbereiche unterteilt wird oder die Beziehung zwischen Teilen eines
      Steuerelements, das aus HTML-Grundelementen besteht, in Bezug auf Größe,
      Position und Layer definiert wird. <br />Umsetzung Sehe Aufgabe "Responsiv
      mit Grid Layout Mobile-First"
      <a href="https://www.meltwater.com/de/blog/mobile-first"
        >Quelle:meltwater,</a
      >
      <a href="https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout"
        >Quelle:MDN</a
      >
    </p>
    <br />
    <p class="frage">dito mit Flexbox</p>
    <p class="antwort">
      Flexbox : erlaubt es, Elemente innerhalb eines flexiblen Containers
      beliebig aufzureihen. Umsetzung Sehe Aufgabe "Responsiv mit Flexbox
      Mobile-First"
      <a href="https://www.meltwater.com/de/blog/mobile-first"
        >Quelle:meltwater,</a
      >
      <a href="https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout"
        >Quelle:MDN</a
      >
    </p>
    <br />
    <p class="frage">
      Mit welchen CSS-Regeln setzt man „Responsive Design“ um? Beschreiben Sie
      diese!
    </p>
    <p class="antwort">
      Mit den befehlen "@media screen and (min-width: 800px)" oder "@media
      screen and (max-width: 800px)". nach dem befehl kann man in CSS die
      athefackte andere eigenschafren geben
      <br />wenn ich mit Mobile-First Arbeite dann verwende ich "min-width" da
      ich von klein nach groß arbeite <br />Wenn ich mit Desktop-First Arbeite
      dann verwende ich "max-width" da ich von groß nach klein arbeite
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
