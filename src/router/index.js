import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Finance from "../views/Finance.vue";
import MainPage from "../layout/MainPage.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  next();
};

const ifAuthenticated = (to, from, next) => {
  next();
};

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifAuthenticated
  },
  {
    path: "",
    component: MainPage,
    beforeEnter: ifNotAuthenticated,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "/finance",
        name: "Finance",
        component: Finance
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
