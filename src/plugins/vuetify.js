// src/plugins/vuetify.js
import Vue from "vue";
import Vuetify, {
  VRow,
  VCol,
  VTextField,
  VTooltip,
  VCheckbox,
  VSelect,
  VSlider,
  VFileInput,
  VColorPicker,
  VMenu,
  VDataTable,
  VDataTableHeader,
  VDataFooter,
  VEditDialog,
  VSimpleCheckbox,
  VDatePicker,
} from "vuetify/lib";
import {
  Ripple,
  Intersect,
  Touch,
  Resize,
  ClickOutside,
} from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VRow,
    VTooltip,
    VCol,
    VTextField,
    VCheckbox,
    VSelect,
    VSlider,
    VFileInput,
    VColorPicker,
    VMenu,
    VDataTable,
    VDataTableHeader,
    VDataFooter,
    VEditDialog,
    VSimpleCheckbox,
    VDatePicker
  },
  directives: { Ripple, Intersect, Touch, Resize, ClickOutside },
});

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
