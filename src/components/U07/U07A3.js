import { LitElement, html } from "lit-element";
import jsondata from "./U07A3.json";
class MyElement extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      jsondata: { type: String },
      toparray: { type: Array },
      bottemarray: { type: Array },
      maintext: { type: String },
      currenttheme: { type: Object },
    };
  }
  constructor() {
    super();

    this.url = "http://www2.inf.h-brs.de/~jhase2s/html/A6/text.json";
    this.jsondata = jsondata;
    this.toparray = Object.keys(jsondata.menues);
    this.bottemarray = [];
    this.maintext = "";
  }

  render() {
    return html`
      ${this.toparray.map(
        (i) =>
          html`
            <button @click=${() => this.setsidenav(i)}>${i}</button>
          `
      )}
      ${this.bottemarray.map(
        (j) =>
          html`
            <button @click=${() => this.settext(j)}>${j}</button>
          `
      )}
      <div>${this.maintext}</div>
    `;
  }
  test() {
    console.log(this.jsondata);
  }
  setsidenav(test) {
    console.log(test);
    this.bottemarray = Object.keys(this.jsondata.menues[test]);
    this.currenttheme = this.jsondata.menues[test];
    console.log(this.currenttheme);
  }
  settext(test) {
    this.maintext = this.currenttheme[test];
  }
}
customElements.define("my-nav", MyElement);
