import Vue from "vue";
import stickcomponent from "@stickearncom/stickcomponent";

import App from "./App.vue";

import router from './router'

import "@stickearncom/stickcomponent/dist/stickcomponent.css";
import "./index.scss";

Vue.use(stickcomponent)
// new Vue({
//   el: "#app",
//   template: "<App/>",
//   components: { App },
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')