// src/plugins/vuetify.js
import Vue from "vue";
import Vuetify from "vuetify/lib";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components,
  directives,
});

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
