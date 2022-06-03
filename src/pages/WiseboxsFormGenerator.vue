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
    <pre>{{ model }}</pre>
  </v-container>
</template>
<script>
// Javascript
import VFormBase from "vuetify-form-base";

const fileObjectToString = (val) => `${val.name} - (File Object)`;

export default {
  components: { VFormBase },
  data() {
    return {
      model: {
        password: "abcdefgh",
        color: "#00E",
        slider: 50,
        checkbox: true,
        file: [],
        matrix: {},
        dataTable: [
          {
            firstName: "John",
            lastName: "Doe",
            raceOrEthnicity: "White",
            gender: "Women",
            status: "Active",
          },
          {
            firstName: "Sadique",
            lastName: "Inam",
            raceOrEthnicity: "White",
            gender: "Men",
            status: "Active",
          },
        ],
      },
      schema: {
        user: "text", // string shorthand
        password: {
          type: "password",
          clearable: true,
        },
        gender: {
          label: "Gender",
          model: "gender",
          type: "select",
          outlined: true,
          items: ["Men", "Women", "Other"],
        },
        dateText: {
          type: "date",
          ext: "text",
          locale: "en",
          text: { label: "Date", outlined: true, prependIcon: "mdi-calendar" },
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
        },
        dataTable: {
          type: "FieldDataTable",
          label: "Faculty Members",
          columns: [
            {
              text: "First Name",
              value: "firstName",
              type: "text",
              outlined: true,
              isEditable: true,
              isDeletable: true,
            },
            {
              text: "Last Name",
              value: "lastName",
              type: "text",
              outlined: true,
              isEditable: true,
              isDeletable: true,
            },
            {
              text: "Race / Ethnicity",
              value: "raceOrEthnicity",
              type: "select",
              items: ["White", "Black or African American", "select"],
              outlined: true,
              isEditable: true,
              isDeletable: true,
            },
            {
              text: "Gender",
              value: "gender",
              type: "select",
              items: ["Men", "Women", "Other"],
              outlined: true,
              isEditable: true,
              isDeletable: true,
            },
            {
              text: "Status",
              value: "status",
              type: "select",
              items: ["Active", "Inactive"],
              hideInTable: true,
              outlined: true,
              isEditable: true,
              isDeletable: true,
            },
          ],
        },
      },
    };
  },
  methods: {
    log(val) {
      console.log(val);
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
