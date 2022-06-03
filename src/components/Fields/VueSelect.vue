<template>
  <div :class="wrapperClass">
    <v-select v-bind="props"></v-select>
  </div>
</template>

<script>
import { abstractField } from "vue-form-generator";
import vSelect from "vue-select";

export default {
  name: "FieldMatrix",
  mixins: [abstractField],
  components: {
    vSelect,
  },
  computed: {
    props() {
      const { props } = this.schema;
      return props ?? {};
    },
    wrapperClass() {
      const { wrapperClass } = this.schema;
      return wrapperClass || "table-responsive";
    },
  },
};
</script>

<style>
.inputs-group {
  padding-left: 5px;
  padding-right: 5px;
}

.inputs-group > .input-group {
  width: 70px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
