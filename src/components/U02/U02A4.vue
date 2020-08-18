<template>
<div>
  <body>
    <h1>Survey Form</h1>
    <form action="freeCodeComp">
      <p>Let us know we can improve freeCodeComp</p>
      <table>
        <tr>
          <td>*Name:</td>
          <td>
            <input type="text" name="name" placeholder="Enter your Name" />
          </td>
        </tr>
        <tr>
          <td>*Email:</td>
          <td>
            <input type="email" name="email" placeholder="Enter your Email" />
          </td>
        </tr>
        <tr>
          <td>*Age:</td>
          <td>
            <input type="number" name="age" placeholder="Age" />
          </td>
        </tr>
        <tr>
          <td>Which option best describes you current role?</td>
          <td>
            <select name="role">
              <option value="student">Student</option>
              <option value="nostudent">No Student</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            *How likely is that you would recommend
            <br />freeCodeCamp to a frend?
          </td>
          <td>
            <input type="radio" name="frend" />Definitely
            <br />
            <input type="radio" name="frend" />Maybe
            <br />
            <input type="radio" name="frend" />Not sure
            <br />
          </td>
        </tr>
        <tr>
          <td>What do you like most in FCC:</td>
          <td>
            <select name="role">
              <option value="0">Select an option</option>
              <option value="1">option 1</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Things that should be improved in the future
            <br />(Check all that apply):
          </td>
          <td>
            <input type="checkbox" name="fep" />Front-end Project
            <br />
            <input type="checkbox" name="bep" />Back-end Project
            <br />
            <input type="checkbox" name="bep" />Data Visulizaion
            <br />
          </td>
        </tr>
      </table>
    </form>
  </body>
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
html {
  height: 87%;
}
body {
  background-color:#b2d6d1;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13pt;
  height: 100%;
}

form {
  background-color: #fafafa;
  padding: 20px 20px 0px;
  margin: 0px 25px;
  border-radius: 5px;
  height: 100%;
}

table {
  margin: 0 auto;
}

td {
  vertical-align: top;
  padding: 10px;
}

td {
  text-align: right;
  width: 50%;
}

td + td {
  text-align: left;
  width: 50%;
}

input {
  font-size: 13pt;
}

input[type="radio"],
input[type="checkbox"] {
  margin-bottom: 10px;
}

select {
  font-size: 13pt;
  background-color: lightgray;
}
</style>