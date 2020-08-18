<template>
  <div>
    <p class="frage">Was ist HTML?</p>
    <p class="antwort">
      Die Hypertext Markup Language (englisch für Hypertext-Auszeichnungssprache), abgekürzt HTML, ist eine textbasierte Auszeichnungssprache zur Strukturierung digitaler Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt. Neben den vom Browser angezeigten Inhalten können HTML-Dateien zusätzliche Angaben in Form von Metainformationen enthalten, z. B. über die im Text verwendeten Sprachen, den Autor oder den zusammengefassten Inhalt des Textes.
      HTML wird vom World Wide Web Consortium (W3C) und der Web Hypertext Application Technology Working Group (WHATWG) weiterentwickelt. Die aktuelle Version ist seit dem 14. Dezember 2017 HTML 5.2,[4] die bereits von vielen aktuellen Webbrowsern und anderen Layout-Engines unterstützt wird. Auch die Extensible Hypertext Markup Language (XHTML) wird durch HTML5 ersetzt.[5]
      HTML dient als Auszeichnungssprache dazu, einen Text semantisch zu strukturieren, nicht aber zu formatieren.[6] Die visuelle Darstellung ist nicht Teil der HTML-Spezifikationen und wird durch den Webbrowser und Gestaltungsvorlagen wie CSS bestimmt. Ausnahme sind die als veraltet (englisch deprecated) markierten präsentationsbezogenen Elemente.
    </p>
    <p
      class="frage"
    >Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?</p>
    <h1>Liste</h1>
    <ol>
      <li>Teife 1</li>
      <ol>
        <li>Tiefe 2</li>
        <ol>
          <li>Tiefe 3</li>
        </ol>
      </ol>
    </ol>

    <p class="frage">Wie ist eine HTML-Tabelle aufgebaut?</p>

    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Vorname</th>
          <th>plz</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Franz</td>
          <td>54321</td>
        </tr>
        <tr>
          <td>Mueller</td>
          <td>Fridolin</td>
          <td>43215</td>
        </tr>
      </tbody>
    </table>
    <p class="frage">Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?</p>
    <p class="antwort">
      -Hauptverzeichnis mit der eigentlichen Homepage
      -name der hompage index.html
      -untervezeichnisse mit sinvollen namen zb bilder in das verzeichnis bilder
    </p>
    <p class="frage">Wie baut man in HTML ein Menü?</p>
    <p class="antwort">z.b eine ungeordnete liste mit hyperlinks(eventuell in einem div (nav))</p>

    <p class="frage">Welche Attribute sollte man bei Bildern wie verwenden?</p>
    <p class="antwort">Dateipfad für source (src) und eine alternative zb kurze beschreibung (alt)</p>
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