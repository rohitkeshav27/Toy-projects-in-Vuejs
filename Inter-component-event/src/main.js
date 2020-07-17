import Vue from "vue";
import pp from "./App.vue";


Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  el: "#app",
  render: h => h(pp)
});
 