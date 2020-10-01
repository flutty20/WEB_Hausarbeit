import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import U01KA from "./components/U01/U01KA";

import U02A1 from "./components/U02/U02A1";
import U02A2 from "./components/U02/U02A2";
import U02A3 from "./components/U02/U02A3";
import U02A4 from "./components/U02/U02A4";
import U02KA from "./components/U02/U02KA";

import U03A1 from "./components/U03/U03A1";
import U03A2 from "./components/U03/U03A2";
import U03A3 from "./components/U03/U03A3";
import U03A4 from "./components/U03/U03A4";
import U03KA from "./components/U03/U03KA";

import U04A1 from "./components/U04/U04A1";
import U04A2 from "./components/U04/U04A2";
import U04KA from "./components/U04/U04KA";

import U05A1 from "./components/U05/U05A1";
import U05A2 from "./components/U05/U05A2";
import U05A3 from "./components/U05/U05A3";
import U05KA from "./components/U05/U05KA";

import U06A1 from "./components/U06/U06A1";
import U06A2 from "./components/U06/U06A2";
import U06A3 from "./components/U06/U06A3";
import U06KA from "./components/U06/U06KA";

import U07A1 from "./components/U07/U07A1";
import U07A2 from "./components/U07/U07A2";
import U07A3 from "./components/U07/U07A3";
import U07KA from "./components/U07/U07KA";

import U08A1 from "./components/U08/U08A1";
import U08A2 from "./components/U08/U08A2";
import U08A3 from "./components/U08/U08A3";
import U08KA from "./components/U08/U08KA";

import U09A1 from "./components/U09/U09A1";
import U09A2 from "./components/U09/U09A2";

import U10A1 from "./components/U10/U10A1";
import U10A2 from "./components/U10/U10A2";
import U10A3 from "./components/U10/U10A3";
import U10KA from "./components/U10/U10KA";

import U11A1 from "./components/U11/U11A1";
import U11A2 from "./components/U11/U11A2";
import U11KA from "./components/U11/U11KA";

import U12A1 from "./components/U12/U12A1";
import U12A2 from "./components/U12/U12A2";
import U12A3 from "./components/U12/U12A3";

import U13A1 from "./components/U13/U13A1";
import U13KA from "./components/U13/U13KA";

import U14A1 from "./components/U14/U14A1";
import U14A2 from "./components/U14/U14A2";
import U14A3 from "./components/U14/U14A3";
import U14KA from "./components/U14/U14KA";

Vue.use(VueRouter);

const routes = [
  { path: "/U01KA", component: U01KA },

  { path: "/U02A1", component: U02A1 },
  { path: "/U02A2", component: U02A2 },
  { path: "/U02A3", component: U02A3 },
  { path: "/U02A4", component: U02A4 },
  { path: "/U02KA", component: U02KA },

  { path: "/U03A1", component: U03A1 },
  { path: "/U03A2", component: U03A2 },
  { path: "/U03A3", component: U03A3 },
  { path: "/U03A4", component: U03A4 },
  { path: "/U03KA", component: U03KA },

  { path: "/U04A1", component: U04A1 },
  { path: "/U04A2", component: U04A2 },
  { path: "/U04KA", component: U04KA },

  { path: "/U05A1", component: U05A1 },
  { path: "/U05A2", component: U05A2 },
  { path: "/U05A3", component: U05A3 },
  { path: "/U05KA", component: U05KA },

  { path: "/U06A1", component: U06A1 },
  { path: "/U06A2", component: U06A2 },
  { path: "/U06A3", component: U06A3 },
  { path: "/U06KA", component: U06KA },

  { path: "/U07A1", component: U07A1 },
  { path: "/U07A2", component: U07A2 },
  { path: "/U07A3", component: U07A3 },
  { path: "/U07KA", component: U07KA },

  { path: "/U08A1", component: U08A1 },
  { path: "/U08A2", component: U08A2 },
  { path: "/U08A3", component: U08A3 },
  { path: "/U08KA", component: U08KA },

  { path: "/U09A1", component: U09A1 },
  { path: "/U09A2", component: U09A2 },

  { path: "/U10A1", component: U10A1 },
  { path: "/U10A2", component: U10A2 },
  { path: "/U10A3", component: U10A3 },
  { path: "/U10KA", component: U10KA },

  { path: "/U11A1", component: U11A1 },
  { path: "/U11A2", component: U11A2 },
  { path: "/U11KA", component: U11KA },

  { path: "/U12A1", component: U12A1 },
  { path: "/U12A2", component: U12A2 },
  { path: "/U12A3", component: U12A3 },

  { path: "/U13A1", component: U13A1 },
  { path: "/U13KA", component: U13KA },

  { path: "/U14A1", component: U14A1 },
  { path: "/U14A2", component: U14A2 },
  { path: "/U14A3", component: U14A3 },
  { path: "/U14KA", component: U14KA },
];

const router = new VueRouter({
  routes: routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
