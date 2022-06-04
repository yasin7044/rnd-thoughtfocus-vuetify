<template>
  <v-container class="mt-5" style="height: 100%" fluid>
    <drop
      class="box"
      @drop="handelDrop"
      style="min-height: 500px; max-height: 90vh; width: 100% !important"
    >
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(eachField, index) in schema" :key="index">
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
            <component :is="eachField.componentName" v-model="schema[index]" />
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
  </v-container>
</template>

<script>
import FieldDataTableBuilder from "../FieldBuilders/FieldDataTableBuilder.vue";
import { Drop } from "vue-drag-drop";

let count = 1;

export default {
  components: {
    Drop,
    FieldDataTableBuilder,
  },
  data() {
    return {
      active: false,
      schema: [
        {
          type: "FieldFileUploader",
          builderLabel: "Field File Uploader",
          componentName: "FieldFileUploaderBuilder",
          label: "",
        },
      ],
      model: {},
    };
  },
  methods: {
    handelDrop(data) {
      this.schema.push({ ...data, model: `field-${count++}` });
    },
    deleteField(index) {
      this.$nextTick(() => {
        this.schema.splice(index, 1);
      });
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
