import Vue from "vue";
import App from "./App.vue";
import Toasted from "vue-toasted";
import VueAnalytics from "vue-analytics";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-136381710-2"
});

Vue.use(Toasted, {
  duration: 4000,
  theme: "outline",
  className: "custom-toast"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
