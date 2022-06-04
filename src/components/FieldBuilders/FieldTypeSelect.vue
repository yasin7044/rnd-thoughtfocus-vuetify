<template>
  <div>
    <v-select
      :items="fieldTypes"
      label="Select Data Type"
      dense
      outlined
      v-model="modelValue.type"
      v-bind="$attrs"
      @input="onInput"
    ></v-select>
    <span v-if="modelValue.items">Options</span>
    <v-container v-if="modelValue.items">
      <v-text-field
        v-for="(option, index) in items"
        :key="index"
        dense
        outlined
        :append-outer-icon="index ? 'mdi-delete' : undefined"
        @click:append-outer="removeOption(index)"
        v-model="items[index]"
        label="Field Label"
      />
      <v-btn
        color="primary"
        class="ma-2 white--text"
        fab
        small
        @click="addOption"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import useValidation from "mixins/use-validation";

export default {
  name: "FieldTypeSelect",
  mixins: [useValidation],
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: () => {},
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
    items: {
      get() {
        return this.modelValue.items;
      },
      set(value) {
        this.modelValue = { ...this.modelValue, items: value };
      },
    },
  },
  data() {
    return {
      fieldTypes: [
        { text: "Text", value: "text" },
        { text: "Number", value: "number" },
        { text: "Password", value: "password" },
        { text: "Email", value: "email" },
        { text: "Checkbox", value: "checkbox" },
        { text: "Switch", value: "switch" },
        { text: "Slider", value: "slider" },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "DateTime", value: "datetime" },
        { text: "File", value: "file" },
        { text: "Textarea", value: "textarea" },
        { text: "Radio", value: "radio" },
        { text: "Select", value: "select" },
        { text: "MultiSelect", value: "multiselect" },
      ],
    };
  },
  methods: {
    onInput(value) {
      switch (value) {
        case "radio":
        case "select":
        case "multiselect":
          this.items = [""];
          break;
        default:
          this.items = undefined;
          break;
      }
    },
    addOption() {
      this.items?.push("");
    },
    removeOption(index) {
      this.items?.splice(index, 1);
    },
  },
};
</script>

<style></style>
