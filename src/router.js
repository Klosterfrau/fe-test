import Vue from "vue";
import Router from "vue-router";
import Aufgabe from "./components/Aufgabe.vue";
import Workplace from "./components/Workplace.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "aufgabe",
      component: Aufgabe
    },
    {
      path: "/work",
      name: "workplace",
      component: Workplace
    }
  ]
});
