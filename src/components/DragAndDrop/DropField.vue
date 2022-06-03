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
            <span>{{ eachField.builderLabel }}</span>
            <v-spacer />

            <v-icon small @click="deleteField(index)" color="pink">
              mdi-delete
            </v-icon>
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
      schema: [],
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
