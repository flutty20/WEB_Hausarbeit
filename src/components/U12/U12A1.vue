<template>
  <form method="post">
    <a href="public\U12A1.php">Link </a>
    <table>
      <tbody>
        <tr>
          <td align="right">Anrede:</td>
          <td>
            <select name="geschl">
              <option value="0">Bitte wählen</option>
              <option value="m">Herr</option>
              <option value="f">Frau</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right">Vorname:</td>
          <td>
            <input maxlength="50" name="vorname" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Nachname:</td>
          <td>
            <input maxlength="50" name="nachname" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Email:</td>
          <td>
            <input maxlength="80" name="email" size="45" type="email" />
          </td>
        </tr>
        <tr>
          <td align="right">Passwort:</td>
          <td>
            <input maxlength="80" name="passwort" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="submit" value="Registrieren" />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 120px;
}
</style>
