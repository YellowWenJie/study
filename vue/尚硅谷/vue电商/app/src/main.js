import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import TypeNav from "@/views/Home/TypeNav";
import Carsousel from "@/components/Carsousel";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);

import "@/mock/mockServe";

//全局引入swiper样式
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
