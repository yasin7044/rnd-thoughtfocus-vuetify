import Vue from "vue";
import VueRouter from "vue-router";
import TestingForm from "../pages/TestingForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: TestingForm,
  },
  {
    path: "/vuetify-form",
    component: () => import("../pages/WiseboxsFormGenerator.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
