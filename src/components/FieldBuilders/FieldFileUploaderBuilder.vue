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
    <v-text-field
      v-if="modelValue.isSpecificUrl"
      dense
      outlined
      label="URL"
      placeholder="https://www.example.com"
      v-model="modelValue.url"
      validate-on-blur
      :rules="[required]"
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
      <v-checkbox label="Set Visible Field" hide-details class="mx-2" />
      <v-checkbox
        label="Need A Specific URL"
        hide-details
        class="mx-2"
        v-model="modelValue.isSpecificUrl"
      />
    </v-row>
    <pre>{{ modelValue }}</pre>
  </v-container>
</template>

<script>
import useModelValue from "mixins/use-modelValue";
import useValidation from "mixins/use-validation";

export default {
  name: "FieldFileUploaderBuilder",
  mixins: [useModelValue, useValidation],
};
</script>

<style></style>
