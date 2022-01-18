import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import TypeNav from "@/views/Home/TypeNav";
import Carsousel from "@/components/Carsousel";
import Pagination from "@/components/Pagination";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);

import "@/mock/mockServe";

//全局引入swiper样式
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  router,
  store
}).$mount("#app");
