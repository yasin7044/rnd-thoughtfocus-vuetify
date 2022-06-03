<template>
  <v-text-field
    dense
    outlined
    :label="label"
    append-outer-icon="mdi-delete"
    @click:append-outer="$emit('onDelete')"
  />
</template>

<script>
export default {
  name: "FieldLabel",
  props: {
    value: {
      type: String,
      default: "",
    },
    noDeleteBtn: Boolean,
    label: {
      type: String,
      default: "Label",
    },
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  emits: ["onDelete"],
};
</script>

<style></style>
