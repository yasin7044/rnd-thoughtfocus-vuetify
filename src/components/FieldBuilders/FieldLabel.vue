<template>
  <v-text-field dense outlined :label="label" />
</template>

<script>
export default {
  name: "FieldLabel",
  props: {
    noDeleteBtn: Boolean,
    label: {
      type: String,
      default: "Label",
    },
  },
};
</script>

<style></style>
