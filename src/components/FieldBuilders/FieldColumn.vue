<template>
  <div>
    <FieldLabel v-model="modelValue.label" @onDelete="$emit('onDelete')" />

    <vs-checkbox v-model="isDedicatedColumnFields">
      Needs a dedicated column fields
    </vs-checkbox>

    <div v-if="isDedicatedColumnFields" class="my-2">
      <button type="button" class="btn btn-primary" @click.prevent="addFields">
        Add Field
      </button>
      <div class="container mt-2">
        <div
          v-for="(field, index) in fields"
          :key="index"
          class="border p-2 m-2"
        >
          <FieldLabel v-model="fields[index].label" @onDelete="removeField" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldLabel from "./FieldLabel.vue";

let fieldCount = 1;

export default {
  name: "FieldColumn",
  components: {
    FieldLabel,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
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
    fields: {
      get() {
        return this.modelValue.fields;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          fields: value,
        };
      },
    },
    isDedicatedColumnFields: {
      get() {
        return this.fields !== undefined;
      },
      set(value) {
        if (value) {
          this.fields = [];
        } else {
          this.fields = undefined;
        }
      },
    },
  },
  methods: {
    addFields() {
      this.fields.push({
        label: "",
        model: `colField-${fieldCount++}`,
      });
    },
    removeField(index) {
      this.$nextTick(() => {
        this.fields.splice(index, 1);
      });
    },
  },
  emits: ["onDelete"],
};
</script>

<style></style>
