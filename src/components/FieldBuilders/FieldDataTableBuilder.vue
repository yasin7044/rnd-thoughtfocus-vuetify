<template>
  <v-container>
    <v-text-field dense outlined label="Table Label" />
    <v-expansion-panels inset>
      <v-expansion-panel>
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field dense outlined label="Header Label" />
          <v-select
            :items="items"
            label="Select Data Type"
            dense
            outlined
          ></v-select>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="primary" class="ma-2 white--text" fab>
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <pre>{{ modelValue }}</pre>
  </v-container>
</template>

<script>
export default {
  name: "FieldDataTableBuilder",
  props: {
    value: { type: Object, default: () => ({}) },
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
  data() {
    return {
      items: [
        { text: "Text", value: "text" },
        { text: "Number", value: "number" },
        { text: "Date", value: "date" },
        { text: "Boolean", value: "boolean" },
      ],
    };
  },
};
</script>

<style></style>
