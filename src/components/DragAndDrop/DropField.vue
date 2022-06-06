<template>
  <v-container class="mt-5" style="height: 100%" fluid>
    <drop
      class="box"
      @drop="handelDrop"
      style="min-height: 500px; max-height: 90vh; width: 100% !important"
    >
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(eachField, index) in schemas" :key="index">
          <v-expansion-panel-header>
            <div class="row justify-space-between mr-2">
              <span>{{ eachField.builderLabel }} -> {{ eachField.label }}</span>

              <v-icon
                small
                @click.prevent.stop="deleteField(index)"
                color="pink"
              >
                mdi-delete
              </v-icon>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <component
              :is="eachField.componentName"
              v-model="schemas[index]"
              :schemas="schemas"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </drop>

    <div>
      <h1 class="text-center">Demo of vue-form-generator</h1>
      <div class="container" id="app">
        <div class="panel panel-default">
          <div class="panel-heading">Form</div>
          <div class="panel-body"></div>
        </div>
      </div>
    </div>

    <v-form class="pa-4">
      <!-- vuetif-form-base component -->
      <v-form-base
        :model="model"
        :schema="schema"
        :col="{ cols: 12 }"
        class="frame"
      />
    </v-form>
  </v-container>
</template>

<script>
import FieldDataTableBuilder from "../FieldBuilders/FieldDataTableBuilder.vue";
import { Drop } from "vue-drag-drop";
import VFormBase from "components/VFormBase.vue";

let count = 1;

export default {
  components: {
    Drop,
    FieldDataTableBuilder,
    VFormBase,
  },
  data() {
    return {
      active: false,
      schemas: [],
      model: {},
    };
  },
  methods: {
    handelDrop(data) {
      this.schemas.push({ ...data, model: `field-${count++}` });
    },
    deleteField(index) {
      this.$nextTick(() => {
        this.schemas.splice(index, 1);
      });
    },
  },
  computed: {
    schema() {
      // return {
      //   dataTable: {
      //     type: "FieldDataTable",
      //     builderLabel: "Field Data Table",
      //     componentName: "FieldDataTableBuilder",
      //     label: "Data Table",
      //     isAddButtonRequired: true,
      //     headers: [
      //       {
      //         text: "First Name",
      //         type: "text",
      //         value: "value-1",
      //       },
      //       {
      //         text: "Last Name",
      //         type: "text",
      //         value: "value-2",
      //       },
      //       {
      //         text: "Gender",
      //         type: "select",
      //         value: "value-3",
      //         items: ["Male", "Female", "Other"],
      //       },
      //       {
      //         text: "Age",
      //         type: "number",
      //         value: "value-4",
      //       },
      //     ],
      //     visible: this.isVisible,
      //   },
      // };
      const schema = {};
      this.schemas.forEach((ele) => {
        schema[ele.model] = ele;
      });
      return schema;
    },
  },
};
</script>

<style>
.mainbox {
  height: 95%;
  width: 100%;
}
.box {
  background-color: whitesmoke;
  overflow: auto;
  padding: 5px;
}

.drop-field {
  height: 100%;
  width: 100%;
  /* overflow-y: scroll; */
  margin-bottom: 20px;
}
</style>
