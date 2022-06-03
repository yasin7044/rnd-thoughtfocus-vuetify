<template>
  <v-data-table
    :headers="computedHeaders"
    :items="modelValue"
    sort-by="calories"
    class="elevation-5"
    disable-pagination
    disable-filtering
    hide-default-footer
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ label }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-dialog v-if="isAddButtonRequired" v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Add {{ label }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <!-- <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row> -->
                <v-form>
                  <!-- vuetif-form-base component -->
                  <v-form-base
                    :model="item"
                    :schema="computedSchema"
                    :col="{ cols: 12 }"
                    class="frame"
                  />
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ index }">
      <v-icon small class="mr-2" @click="editItem(index)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(index)"> mdi-delete </v-icon>
    </template>
    <template v-slot:footer>
      <pre>Value: {{ modelValue }}</pre>
      <pre>Headers / Columns: {{ computedHeaders }}</pre>
      <pre>Schema: {{ computedSchema }}</pre>
    </template>
  </v-data-table>
</template>

<script>
import VFormBase from "vuetify-form-base";

export default {
  name: "FieldDataTable",
  components: { VFormBase },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    label: String,
    headers: {
      type: Array,
      default: () => [],
    },
    isAddButtonRequired: Boolean,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    item: {},
  }),

  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    formTitle() {
      return this.editedIndex === -1
        ? `Add ${this.label}`
        : `Edit ${this.label}`;
    },
    computedSchema() {
      const schema = {};
      this.headers.forEach((column) => {
        schema[column.value] = {
          ...column,
          label: column.text,
        };
      });
      return schema;
    },
    computedHeaders() {
      const headers = this.headers.filter((column) => !column.hideInTable);

      headers.push({
        text: "Actions",
        value: "actions",
      });
      return headers;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(index) {
      this.editedIndex = index;
      this.item = Object.assign({}, this.modelValue[index]);
      this.dialog = true;
    },

    deleteItem(index) {
      this.editedIndex = index;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.modelValue.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.item = {};
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.item = {};
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.modelValue[this.editedIndex], this.item);
      } else {
        this.modelValue.push(this.item);
      }
      this.close();
    },
  },
};
</script>
