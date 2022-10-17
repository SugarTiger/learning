import Vue from "vue";
import App from "./App.vue";
import "@/components/CgIcon/index.js";
import CgIcon from "@/components/CgIcon/index.vue";

Vue.config.productionTip = false;

Vue.component("cg-icon", CgIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
