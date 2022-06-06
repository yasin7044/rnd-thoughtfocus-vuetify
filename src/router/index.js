import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("../pages/WiseboxsFormGenerator.vue"),
  },
  {
    path: "/form-builder",
    component: () => import("../pages/DemoFormBuilder.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
