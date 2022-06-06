<template>
  <div
    class="v-data-table v-data-table--has-bottom theme--light elevation-1 mb-6"
  >
    <div class="v-data-table__wrapper">
      <table>
        <colgroup>
          <col v-for="column in columns" :key="column.model" class="" />
        </colgroup>
        <thead class="v-data-table-header">
          <tr>
            <th
              role="columnheader"
              scope="col"
              aria-sort="none"
              class="text-start"
            ></th>
            <th
              role="columnheader"
              scope="col"
              aria-sort="none"
              class="text-start"
              v-for="column in columns"
              :key="column.model"
              :aria-label="column.label"
            >
              <div class="column">
                <span class="text-body-2 font-weight-medium">
                  {{ column.label }}
                </span>
                <v-row>
                  <label
                    v-for="field in getColumnFields(column)"
                    :key="field.model"
                    class="col mx-1"
                  >
                    {{ field.label }}
                  </label>
                </v-row>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.model">
            <th scope="row" class="text-body-2">
              {{ row.label }}
            </th>
            <td v-for="column in columns" :key="column.model" class="pa-0">
              <div v-if="!row.noInputFields" class="input-groups">
                <v-text-field
                  v-for="field in getColumnFields(column)"
                  :key="field.model"
                  outlined
                  dense
                  :type="field.type || 'number'"
                  :id="`${field.model}-${row.model}-${column.model}`"
                  :name="`${field.model}-${row.model}-${column.model}`"
                  :value="getValue(field, row, column)"
                  :disabled="field.disabled"
                  :required="field.required"
                  :readonly="field.readonly"
                  @input="onInput(field, row, column, $event)"
                  hide-details
                ></v-text-field>
              </div>
            </td>
          </tr>
          <tr v-if="subtotal">
            <th scope="row" class="text-body-2">Subtotal</th>
            <td v-for="column in columns" :key="column.model" class="pa-0">
              <div class="input-groups">
                <v-text-field
                  v-for="field in getColumnFields(column)"
                  :key="field.model"
                  outlined
                  dense
                  :type="field.type || 'number'"
                  :id="`${field.model}-subtotal-${column.model}`"
                  :name="`${field.model}-subtotal-${column.model}`"
                  :value="
                    !modelValue
                      ? ''
                      : !modelValue['subtotal']
                      ? ''
                      : !modelValue['subtotal'][column.model]
                      ? ''
                      : modelValue['subtotal'][column.model][field.model]
                  "
                  :disabled="field.disabled"
                  :required="field.required"
                  hide-details
                  readonly
                ></v-text-field>
              </div>
            </td>
          </tr>
          <tr v-if="total">
            <th scope="row" class="text-body-2">Total</th>
            <td v-for="column in columns" :key="column.model" class="pa-0">
              <div class="input-groups">
                <v-text-field
                  v-for="field in getColumnFields(column)"
                  :key="field.model"
                  outlined
                  dense
                  :type="field.type || 'number'"
                  :id="`${field.model}-total-${column.model}`"
                  :name="`${field.model}-total-${column.model}`"
                  :value="
                    !modelValue
                      ? ''
                      : !modelValue['total']
                      ? ''
                      : !modelValue['total'][column.model]
                      ? ''
                      : modelValue['total'][column.model][field.model]
                  "
                  :disabled="field.disabled"
                  :required="field.required"
                  hide-details
                  readonly
                ></v-text-field>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldMatrix",
  props: {
    value: {
      type: Object,
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    columnsFields: {
      type: Array,
      default: () => [],
    },
    subtotal: {
      type: Boolean,
      default: true,
    },
    total: {
      type: Boolean,
      default: true,
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
  },
  methods: {
    getColumnFields(column) {
      return column.fields ?? this.columnsFields;
    },
    getValue(field, row, column) {
      const { model } = row;
      const { model: columnModel } = column;
      const { model: fieldModel } = field;
      const { [model]: rowValue } = this.modelValue ?? {};
      const { [columnModel]: columnValue } = rowValue ?? {};
      const { [fieldModel]: fieldValue } = columnValue ?? {};
      return fieldValue;
    },
    onInput(field, row, column, value) {
      this.setValue(field, row, column, value);

      setTimeout(() => {
        this.calculate(field, column);
      }, 0);
    },
    setValue(field, row, column, value) {
      const { model } = row;
      const { model: columnModel } = column;
      const { model: fieldModel } = field;
      const { [model]: rowValue } = this.modelValue ?? {};
      const { [columnModel]: columnValue } = rowValue ?? {};

      this.modelValue = {
        ...this.modelValue,
        [model]: {
          ...rowValue,
          [columnModel]: {
            ...columnValue,
            [fieldModel]: parseFloat(value),
          },
        },
      };
    },
    calculate(field, column) {
      const { model: columnModel } = column;
      const { model: fieldModel } = field;
      const subtotalModel = "subtotal";
      const totalModel = "total";
      const { [subtotalModel]: subtotalValues } = this.modelValue ?? {};
      const { [totalModel]: totalValues } = this.modelValue ?? {};
      const { [columnModel]: columnSubtotalValues } = subtotalValues ?? {};
      const { [columnModel]: columnTotalValues } = totalValues ?? {};
      let subtotal = 0;
      let total = 0;

      this.rows.forEach((row) => {
        const { model, isInSubtotal, noInputFields } = row;

        if (noInputFields) return;

        const { [model]: rowValue } = this.modelValue ?? {};
        const { [columnModel]: columnValue } = rowValue ?? {};
        const { [fieldModel]: fieldValue } = columnValue ?? {};
        const value = fieldValue || 0;
        total += value;

        if (this.subtotal && isInSubtotal) {
          subtotal += value;
        }
      });

      this.modelValue = {
        ...this.modelValue,
        [subtotalModel]: {
          ...subtotalValues,
          [columnModel]: {
            ...columnSubtotalValues,
            [fieldModel]: subtotal,
          },
        },
        [totalModel]: {
          ...totalValues,
          [columnModel]: {
            ...columnTotalValues,
            [fieldModel]: total,
          },
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input-groups {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;

  ::v-deep {
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
}

.v-input {
  width: 70px;
  padding-left: 5px;
  padding-right: 5px;
}

table {
  th,
  td {
    border-left: thin solid rgba(0, 0, 0, 0.12);
  }
}

.text-body-2 {
  color: black;
}
</style>
