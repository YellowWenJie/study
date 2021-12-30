import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { show: true }
    },
    {
      path: "/search/:keyword?",
      name: "search",
      component: Search,
      meta: { show: true },
      props: $route => {
        return { keyword: $route.params.keyword, k: $route.query.k };
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { show: false }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { show: false }
    }
  ]
});
