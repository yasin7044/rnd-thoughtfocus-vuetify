import Vue from "vue";
// import "vue-form-generator/dist/vfg.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Matrix from "./components/Fields/Matrix.vue";
import DataTable from "./components/Fields/DataTable.vue";
import router from "./router";
import FieldLabel from "./components/FieldBuilders/FieldLabel.vue";

Vue.config.productionTip = false;

Vue.component(Matrix.name, Matrix);
Vue.component(DataTable.name, DataTable);
Vue.component(FieldLabel.name, FieldLabel);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
