import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import { reqCategoryList } from "@/api/index";

import TypeNav from "@/pages/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
reqCategoryList();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
