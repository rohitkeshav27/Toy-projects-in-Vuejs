import Vue from "vue";
import pp from "./App.vue";


Vue.config.productionTip = false;



new Vue({
  el: "#app",
  render: h => h(pp)
});
 