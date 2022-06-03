<template>
  <div>
    <FieldLabel v-model="modelValue.label" @onDelete="$emit('onDelete')" />

    <div class="row row-col-2">
      <vs-checkbox class="col" v-model="modelValue.noInputFields">
        No Input Fields
      </vs-checkbox>
      <vs-checkbox
        v-if="requireSubtotal"
        class="col"
        v-model="modelValue.isInSubtotal"
        :disabled="modelValue.noInputFields"
      >
        Is In Subtotal
      </vs-checkbox>
    </div>
  </div>
</template>

<script>
import FieldLabel from "./FieldLabel.vue";

export default {
  name: "FieldRow",
  components: {
    FieldLabel,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    requireSubtotal: Boolean,
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
