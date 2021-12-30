import Vue from "vue";
//引入vuex
import Vuex from "vuex";

Vue.use(Vuex);
import home from "./home";
import search from "./search";

export default new Vuex.Store({
  modules: {
    a: home,
    b: search
  }
});
