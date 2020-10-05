import { LitElement, html } from "lit-element";

var ID = 0;

class MyElement extends LitElement {
  static get properties() {
    return {
      cur: { type: Number },
      last: { type: Number },
      milsec: { type: Number },
      sec: { type: Number },
      min: { type: Number },
      hr: { type: Number },
      id: { type: Number },
      interval: { type: Object },
      minlock: { type: Number },
      check: { type: Number },
    };
  }

  constructor() {
    super();

    this.milsec = 0;
    this.sec = 0;
    this.min = 0;
    this.hr = 0;
    this.id = ID++;
    this.minlock = 0;
    this.last = new Date();
    this.cur = this.date;
    this.check = 0;
  }
  render() {
    return html`
      <p>
        ${this.hr}:${this.min % 60}:${this.sec % 60}:${this.milsec % 1000}
      </p>
      <button id="${this.id}" @click="${this.start}">start</button>
      <button @click="${this.clear}">stop</button>
      <button @click="${this.continue}">weiter</button>
    `;
  }
  continue() {
    this.check = 0;
    this.interval = setInterval(() => {
      this.milsec += 10;
      if (this.milsec % 1000 === 0) {
        this.sec++;
      }
      if (this.sec % 60 === 0 && this.milsec % 1000 === 0) {
        this.min++;
      }
      if (
        this.milsec % 1000 === 0 &&
        this.sec % 60 === 0 &&
        this.min % 60 === 0
      ) {
        this.hr++;
      }
    }, 10);
  }

  start() {
    if (this.check == 0) {
      this.check = 1;
      console.log("timer");
      this.milsec = 0;
      this.min = 0;
      this.hr = 0;
      this.sec = 0;
      this.interval = setInterval(() => {
        this.milsec += 10;
        if (this.milsec % 1000 === 0) {
          this.sec++;
        }
        if (this.sec % 60 === 0 && this.milsec % 1000 === 0) {
          this.min++;
        }
        if (
          this.milsec % 1000 === 0 &&
          this.sec % 60 === 0 &&
          this.min % 60 === 0
        ) {
          this.hr++;
        }
      }, 10);
    }
  }
  clear() {
    this.check = 0;
    clearInterval(this.interval);
  }
}
customElements.define("my-clock", MyElement);
