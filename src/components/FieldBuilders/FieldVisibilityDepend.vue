<template>
  <div>
    <v-select
      label="Visible Depend on"
      :items="computedItems"
      :item-text="itemText"
      item-value="model"
      v-model="modelValue.isVisibleDependModel"
      dense
      outlined
    />
    <v-text-field
      dense
      outlined
      label="Value"
      v-model="modelValue.isVisibleValue"
      validate-on-blur
      :rules="[required]"
      :disabled="!modelValue.isVisibleDependModel"
    />
  </div>
</template>

<script>
import useFieldBuilder from "mixins/use-fieldBuilder";

export default {
  name: "FieldVisibiltyDepend",
  mixins: [useFieldBuilder],
  computed: {
    computedItems() {
      return this.schemas.filter(
        (item) => item.model !== this.modelValue.model
      );
    },
  },
  methods: {
    itemText(item) {
      return item.label || item.model;
    },
  },
};
</script>

<style></style>
