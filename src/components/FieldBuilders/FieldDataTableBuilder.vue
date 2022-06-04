<template>
  <v-container>
    <v-text-field
      dense
      outlined
      label="Table Label"
      v-model="modelValue.label"
      validate-on-blur
      :rules="[required]"
    />
    <v-col>
      <v-checkbox
        v-model="modelValue.isAddButtonRequired"
        label="Require Add data button"
        hide-details
        class="ma-0"
      />
      <v-checkbox
        v-model="modelValue.isEditable"
        label="Is Data Editable"
        hide-details
      />
      <v-checkbox
        v-model="modelValue.isDeletable"
        label="Is Data Deletable"
        hide-details
      />
    </v-col>
    <v-expansion-panels inset v-model="panel">
      <v-expansion-panel v-for="(header, index) in headers" :key="index">
        <v-expansion-panel-header>
          <div class="row justify-space-between mr-2">
            <span>Item -> {{ header.label }}</span>

            <v-icon
              small
              @click.prevent.stop="removeHeader(index)"
              color="pink"
              v-if="index > 0"
            >
              mdi-delete
            </v-icon>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <FieldHeader v-model="headers[index]" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn
      color="primary"
      class="ma-2 mt-4 white--text"
      fab
      small
      @click="addHeader"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <pre>{{ modelValue }}</pre>
  </v-container>
</template>

<script>
import useValidation from "mixins/use-validation";
import FieldHeader from "./FieldHeader.vue";

let count = 1;

export default {
  name: "FieldDataTableBuilder",
  components: {
    FieldHeader,
  },
  mixins: [useValidation],
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
    headers: {
      get() {
        return this.modelValue.headers;
      },
      set(value) {
        this.modelValue = { ...this.modelValue, headers: value };
      },
    },
  },
  data() {
    return {
      panel: null,
    };
  },
  created() {
    if (!this.headers) {
      this.headers = [];
    }
    this.$nextTick(() => {
      this.headers.push({
        text: "",
        type: "text",
        value: `value-${count++}`,
      });
    });
  },
  methods: {
    addHeader() {
      this.headers.push({
        text: "",
        type: "text",
        value: `value-${count++}`,
      });
      this.panel = this.headers.length - 1;
    },
    removeHeader(index) {
      this.$nextTick(() => {
        this.headers.splice(index, 1);
      });
    },
  },
};
</script>

<style></style>
