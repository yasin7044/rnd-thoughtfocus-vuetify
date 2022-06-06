<template>
  <v-container>
    <v-text-field
      dense
      outlined
      label="Label"
      v-model="modelValue.label"
      validate-on-blur
      :rules="[required]"
    />
    <v-text-field
      v-if="isSpecificUrl"
      dense
      outlined
      label="URL"
      placeholder="https://www.example.com"
      v-model="modelValue.url"
      validate-on-blur
      :rules="[required]"
    />
    <FieldVisibilityDepend
      v-if="isSetVisibleField"
      v-model="value"
      :schemas="schemas"
      class="elevation-1 pa-4 pb-0 mb-1"
    />

    <v-row class="justify-space-between">
      <v-checkbox
        label="Featured"
        hide-details
        class="mx-2"
        v-model="modelValue.isFeatured"
      />
      <v-checkbox
        label="Required"
        hide-details
        class="mx-2"
        v-model="modelValue.isRequired"
      />
      <v-checkbox
        label="Set Visible Field"
        hide-details
        class="mx-2"
        v-model="isSetVisibleField"
        @change="handleSetVisibleField"
      />
      <v-checkbox
        label="Need A Specific URL"
        hide-details
        class="mx-2"
        v-model="isSpecificUrl"
        @change="handleUrl"
      />
    </v-row>
  </v-container>
</template>

<script>
import FieldVisibilityDepend from "./FieldVisibilityDepend.vue";
import useFieldBuilder from "mixins/use-fieldBuilder";

export default {
  name: "FieldFileUploaderBuilder",
  mixins: [useFieldBuilder],
  components: {
    FieldVisibilityDepend,
  },
  data() {
    return {
      isSpecificUrl: false,
      isSetVisibleField: false,
    };
  },
  methods: {
    handleUrl(value) {
      if (!value) {
        this.modelValue.url = undefined;
      }
    },
    handleSetVisibleField(value) {
      if (!value) {
        this.modelValue.isVisibleValue = undefined;
        this.modelValue.isVisibleDependModel = undefined;
      }
    },
  },
};
</script>

<style></style>
