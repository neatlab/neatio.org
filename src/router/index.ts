import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Generate from "../views/Generate.vue";
import Transfer from "../views/Transfer.vue";
import Terms from "../views/Terms.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/generate",
    name: "Generate",
    component: Generate
  },
  {
    path: "/transfer",
    name: "Transfer",
    component: Transfer
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms
  },
  
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  
});

export default router;
