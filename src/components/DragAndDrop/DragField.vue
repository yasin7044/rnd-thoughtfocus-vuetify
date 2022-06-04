<template>
  <v-card class="mx-auto mt-5" max-width="300" tile>
    <v-list rounded>
      <v-subheader>Components</v-subheader>
      <drag
        v-for="(eachItem, index) in allFields"
        :key="index"
        :transfer-data="eachItem"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="'mdi-account'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="eachItem.builderLabel"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </drag>
    </v-list>
  </v-card>
</template>

<script>
import { Drag } from "vue-drag-drop";

export default {
  name: "DragField",
  components: {
    Drag,
  },
  data() {
    return {
      countModel: 0,
      generalarrow: false,
      allFields: [
        this.getField({ type: "label", builderLabel: "Label" }),
        this.getField({
          type: "text",
          builderLabel: "Text",
          inputType: "text",
        }),
        this.getField({
          type: "email",
          builderLabel: "Email",
        }),
        this.getField({
          type: "Number",
          builderLabel: "Number",
        }),
        this.getField({ type: "textArea", builderLabel: "Text Area" }),
        this.getField({
          type: "matrix",
          builderLabel: "Matrix",
          componentName: "FieldMatrixBuilder",
        }),
        this.getField({
          type: "FieldDataTable",
          builderLabel: "Field Data Table",
          componentName: "FieldDataTableBuilder",
        }),
        this.getField({
          type: "FieldFileUploader",
          builderLabel: "Field File Uploader",
          componentName: "FieldFileUploaderBuilder",
        }),
      ],
      selectedItem: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
  methods: {
    getField(fieldProps) {
      // let commonField = {
      //   label: "Name",
      //   model: `field-${count++}`,
      //   readonly: false,
      //   featured: true,
      //   required: true,
      //   disabled: false,
      //   placeholder: "User's name",
      //   inputType: null,
      //   ...fieldProps,
      // };
      // switch (fieldProps.type) {
      //   case "textArea":
      //   case "label":
      //     return commonField;
      //   case "text":
      //     return { ...commonField, ...{ min: "", max: "" } };
      //   case "radios":
      //     return { ...commonField, values: [] };
      //   case "vueSelect": {
      //     return { ...commonField, props: vueMultiSelectOption };
      //   }
      // }
      return { ...fieldProps, label: "" };
    },
  },
};
</script>

<style lang="scss" scoped></style>
