// HTML
<template>
  <v-container fluid>
    <v-form>
      <!-- vuetif-form-base component -->
      <v-form-base
        :model="model"
        :schema="schema"
        :col="{ cols: 12 }"
        class="frame"
      />
    </v-form>
    <!-- <pre>{{ model }}</pre> -->
  </v-container>
</template>
<script>
// Javascript
import VFormBase from "components/VFormBase.vue";

const fileObjectToString = (val) => `${val.name} - (File Object)`;

export default {
  components: { VFormBase },
  data() {
    return {
      model: {
        user: "sa",
        password: "abcdefgh",
        color: "#00E",
        slider: 50,
        checkbox: true,
        file: [],
        matrix: {
          sad: "sad",
        },
        dataTable: [],
      },
      schema: {
        user: "text", // string shorthand
        password: {
          type: "password",
          clearable: true,
          visible: this.isVisible,
        },
        gender: {
          label: "Gender",
          model: "gender",
          type: "select",
          outlined: true,
          items: ["Men", "Women", "Other"],
          visible: this.isVisible,
        },
        dateText: {
          type: "date",
          ext: "text",
          locale: "en",
          text: { label: "Date", outlined: true, prependIcon: "mdi-calendar" },
          visible: this.isVisible,
        },
        matrix: {
          type: "FieldMatrix",
          label: "Matrix",
          columns: [
            {
              label: "Testing Column1",
              model: "col1",
              fields: [
                {
                  label: "SuperMen",
                  model: "superMen",
                },
                {
                  label: "WonderWomen",
                  model: "wonderWomen",
                },
                {
                  label: "Hulk",
                  model: "hulk",
                },
              ],
            },
            {
              label: "Testing column 2",
              model: "col2",
            },
            {
              label: "Testing column 3",
              model: "col3",
            },
          ],
          rows: [
            { label: "Testing Row 1", model: "row1", isInSubtotal: true },
            { label: "Testing Row 2", model: "row2", isInSubtotal: true },
            { label: "Testing Row 3", model: "row3", noInputFields: true },
            { label: "Testing Row 4", model: "row4" },
          ],
          columnsFields: [
            {
              label: "Men",
              model: "men",
            },
            {
              label: "Women",
              model: "women",
            },
            {
              label: "Other",
              model: "other",
            },
          ],
          isVisibleValue: "aa",
          isVisibleDependModel: "user",
          hidden: false,
          visible: this.isVisible,
        },
        dataTable: {
          type: "FieldDataTable",
          builderLabel: "Field Data Table",
          componentName: "FieldDataTableBuilder",
          label: "Data Table",
          headers: [
            {
              text: "First Name",
              type: "text",
              value: "value-1",
            },
            {
              text: "Last Name",
              type: "text",
              value: "value-2",
            },
            {
              text: "Gender",
              type: "select",
              value: "value-3",
              items: ["Male", "Female", "Other"],
            },
            {
              text: "Age",
              type: "number",
              value: "value-4",
            },
          ],
          visible: this.isVisible,
        },
      },
    };
  },
  methods: {
    log(val) {
      console.log(val);
      return false;
    },
    replacer(key, value) {
      if (typeof value === "function") {
        return "Function";
      }
      if (Array.isArray(value) && value[0] instanceof File) {
        // map Fileobject to Filename
        return value.map((i) => fileObjectToString(i));
      }
      if (value instanceof File) {
        return fileObjectToString(value);
      }
      return value;
    },
    isVisible(model, schema) {
      if (schema?.isVisibleValue && schema?.isVisibleDependModel) {
        return model[schema.isVisibleDependModel] === schema.isVisibleValue;
      }
      return true;
    },
  },
  computed: {
    getFalse() {
      return true;
    },
  },
};
</script>

<style>
/* .frame {
  border: solid 1px #ccc;
  padding: 8px;
}
#form-base .item {
  border-bottom: solid 1px #ccf;
  border-right: solid 1px #ccf;
  padding: 8px;
} */
</style>
