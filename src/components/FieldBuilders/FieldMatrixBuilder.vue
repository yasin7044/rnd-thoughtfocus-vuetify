<template>
  <div class="container flex-column mb-2 border">
    <button @click.prevent="setDummyColumnRows">Dummy Field</button>
    <FieldLabel v-model="modelValue.label" no-delete-btn />
    <div class="row row-col-2">
      <vs-checkbox class="col" v-model="subtotal">
        Require Subtotal
      </vs-checkbox>
      <vs-checkbox class="col" v-model="total"> Require Total </vs-checkbox>
    </div>

    <div class="my-2">
      <button type="button" class="btn btn-primary" @click.prevent="addColumn">
        Add Column
      </button>
      <div class="container mt-2">
        <div
          v-for="(column, index) in columns"
          :key="index"
          class="border p-2 m-2"
        >
          <FieldColumn
            v-model="columns[index]"
            @onDelete="removeColumn(index)"
          />
        </div>
      </div>
    </div>

    <div class="my-2">
      <button type="button" class="btn btn-primary" @click.prevent="addRow">
        Add Row
      </button>

      <div class="container mt-2">
        <div v-for="(row, index) in rows" :key="index" class="border p-2 m-2">
          <FieldRow
            v-model="rows[index]"
            @onDelete="removeRow(index)"
            :require-subtotal="subtotal"
          />
        </div>
      </div>
    </div>

    <div class="my-2">
      <button type="button" class="btn btn-primary" @click="addColumnFields">
        Add Column Field
      </button>
      <div class="container mt-2">
        <div
          v-for="(row, index) in columnsFields"
          :key="index"
          class="border p-2 m-2"
        >
          <FieldLabel
            v-model="columnsFields[index].label"
            @onDelete="removeColumnField(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldLabel from "./FieldLabel.vue";
import FieldColumn from "./FieldColumn.vue";
import FieldRow from "./FieldRow.vue";

let colCount = 1;
let rowCount = 1;
let colFieldCount = 1;

export default {
  name: "FieldMatrixBuilder",
  components: {
    FieldColumn,
    FieldLabel,
    FieldRow,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
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
    columns: {
      get() {
        if (!this.modelValue.columns) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.columns = [];
        }
        return this.modelValue.columns;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          columns: value,
        };
      },
    },
    rows: {
      get() {
        if (!this.modelValue.rows) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.rows = [];
        }
        return this.modelValue.rows;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          rows: value,
        };
      },
    },
    columnsFields: {
      get() {
        if (!this.modelValue.columnsFields) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.columnsFields = [];
        }
        return this.modelValue.columnsFields;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          columnsFields: value,
        };
      },
    },
    subtotal: {
      get() {
        return this.modelValue.subtotal;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          subtotal: value,
        };
      },
    },
    total: {
      get() {
        return this.modelValue.total;
      },
      set(value) {
        this.modelValue = {
          ...this.modelValue,
          total: value,
        };
      },
    },
  },
  methods: {
    setDummyColumnRows() {
      this.value.columns = [
        {
          label: "Testing Column1",
          model: "col1",
          value: 1,
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
      ];
      this.value.rows = [
        {
          label: "Testing Row 1",
          model: "row1",
        },
        {
          label: "Testing Row 2",
          model: "row2",
        },
        {
          label: "Testing Row 3",
          model: "row3",
          noInputFields: true,
        },
        {
          label: "Testing Row 4",
          model: "row4",
        },
      ];

      this.value.columnsFields = [
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
      ];
    },
    addColumn() {
      this.columns.push({
        label: "",
        model: `col-${colCount++}`,
      });
    },
    removeColumn(index) {
      this.$nextTick(() => {
        this.columns.splice(index, 1);
      });
    },
    addRow() {
      this.rows.push({
        label: "",
        model: `row-${rowCount++}`,
        noInputFields: false,
        isInSubtotal: false,
      });
    },
    removeRow(index) {
      this.$nextTick(() => {
        this.rows.splice(index, 1);
      });
    },
    addColumnFields() {
      this.columnsFields.push({
        label: "",
        model: `colField-${colFieldCount++}`,
      });
    },
    removeColumnField(index) {
      this.$nextTick(() => {
        this.columnsFields.splice(index, 1);
      });
    },
  },
};
</script>

<style></style>
