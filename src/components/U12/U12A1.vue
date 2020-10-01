<template>
  <form method="post">
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
            <input maxlength="50" name="Vorname" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Nachname:</td>
          <td>
            <input maxlength="50" name="Nachname" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Strasse:</td>
          <td>
            <input maxlength="50" name="Strasse" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">PLZ:</td>
          <td>
            <input maxlength="5" name="PLZ" size="7" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Ort:</td>
          <td>
            <input maxlength="50" name="Ort" size="45" type="text" />
          </td>
        </tr>
        <tr>
          <td align="right">Land:</td>
          <td>
            <input name="Land" size="45" type="text" value="Deutschland" />
          </td>
        </tr>
        <tr>
          <td align="right">Email:</td>
          <td>
            <input maxlength="80" name="Email" size="45" type="email" />
          </td>
        </tr>
        <tr>
          <td align="right">Passwort:</td>
          <td>
            <input maxlength="80" name="Passwort" size="45" type="text" />
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
