import Vue from "vue";
import Router from "vue-router";
import home from "../views/Home/home";
import register from "../views/Home/register";
import login from "../views/Home/login";
import adLogin from "../views/Home/adLogin";
import agencyLogin from "../views/Home/agencyLogin";
import adminLogin from "../views/Home/adminLogin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/register",
      component: register
    },
    {
      path: "/login",
      component: login,
      meta: { title: '广告运营'}
    },
    {
      path: "/adlogin",
      component: adLogin,
      meta: { title: '广告'}
    },
    {
      path: "/agencylogin",
      component: agencyLogin,
      meta: { title: '代理'}
    },
    {
      path: "/adminlogin",
      component: adminLogin
    }
  ]
});
