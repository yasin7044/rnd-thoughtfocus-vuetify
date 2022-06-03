<template>
  <div>
    <h1 class="text-center">Demo of vue-form-generator</h1>
    <div class="container" id="app">
      <div class="panel panel-default">
        <div class="panel-heading">Form</div>
        <div class="panel-body">
          <!-- <pre>  {{model}}</pre> -->
          <vue-form-generator
            :schema="schema"
            :model="model"
          ></vue-form-generator>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">Model</div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Schema</div>
        <div class="panel-body">
          <pre>{{ schema }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
export default {
  components: {
    "vue-form-generator": VueFormGenerator.component,
  },
  data() {
    return {
      model: {
        tableData: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%",
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%",
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%",
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%",
          },
          {
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%",
          },
          {
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%",
          },
          {
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%",
          },
          {
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%",
          },
          {
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%",
          },
          {
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%",
          },
        ],
      },
      schema: {
        fields: [
          {
            type: "DataTable",
            model: "tableData",
            label: "Data Table",
            headers: [
              {
                text: "Dessert (100g serving)",
                value: "name",
              },
              { text: "Calories", value: "calories" },
              { text: "Fat (g)", value: "fat" },
              { text: "Carbs (g)", value: "carbs" },
              { text: "Protein (g)", value: "protein" },
              { text: "Iron (%)", value: "iron" },
            ],
          },
          {
            type: "matrix",
            inputType: "text",
            label: "Matrix",
            model: "matrix",
            subtotal: true,
            columns: [
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
              { label: "Testing column 2", model: "col2" },
              { label: "Testing column 3", model: "col3" },
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
          {
            type: "input",
            inputType: "text",
            label: "ID",
            model: "id",
            values: [],
          },
          {
            type: "input",
            inputType: "text",
            label: "Name",
            model: "name",
            readonly: false,
            featured: true,
            required: true,
            disabled: false,
            placeholder: "User's name",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            min: 6,
            required: true,
            hint: "Minimum 6 characters",
            validator: VueFormGenerator.validators.string,
          },
          {
            type: "input",
            inputType: "number",
            label: "Age",
            model: "age",
            min: 18,
            validator: VueFormGenerator.validators.number,
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail",
            model: "email",
            placeholder: "User's e-mail address",
            validator: VueFormGenerator.validators.email,
          },
          {
            type: "checklist",
            label: "Skills",
            model: "skills",
            multi: true,
            required: true,
            multiSelect: true,
            values: [
              "HTML5",
              "Javascript",
              "CSS3",
              "CoffeeScript",
              "AngularJS",
              "ReactJS",
              "VueJS",
            ],
          },
          {
            type: "switch",
            label: "Status",
            model: "status",
            multi: true,
            readonly: false,
            featured: false,
            disabled: false,
            default: true,
            textOn: "Active",
            textOff: "Inactive",
          },
        ],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
      },
    };
  },
};
</script>

<!-- <style lang="scss">
$c-light:#879CB3;
$c-medium:#495C70;
$c-dark:#171D23;
$white:#eee;
* {
    box-sizing: border-box;
}
html {
    font-size: 14px;
}
body {
    line-height: 1.42857143;
    color: $white;
    background: $c-dark;
}
body,
input {
    font-family: Georgia, "Times New Roman", Times, serif;
}
pre {
    overflow: auto;
}
h1 {
    text-align: center;
    font-size: 36px;
    margin: 2rem 0;
    font-weight: 500;
    color: $c-light;
}
fieldset {
    border: 0;
    padding: 10px 8px;
}
.panel {
    background: $c-medium;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    border: 5px solid #53687E;
    max-width: 500px;
    margin: auto;
    margin-bottom: 3rem;
}
.panel-heading {
    font-size: 1.5rem;
    border-color: $white;
    padding: 10px 8px;
    margin: 0 15px;
    border-bottom: 1px solid $c-light;
}
.panel-body {
    padding: 15px;
}
/* custom */

.vue-form-generator {
    .error {
        color: $c-medium;
        background-color: rgb(238, 238, 238);
        .field-wrap .form-control {
            color: $c-dark;
        }
    }
    .form-group {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 1.6rem;
        padding: 5px 10px;
        border-radius: 4px;
        transition: background-color 0.3s;
        label {
            padding: 5px 0;
            margin-right: 1rem;
        }
        &.featured label {
            font-weight: bold;
        }
        &.required label::after {
            content: "*";
            font-weight: normal;
            color: red;
            position: absolute;
            padding-left: 0.2em;
            font-size: 1em;
        }
        &.disabled label {
            color: $c-light;
        }
        &.disabled .form-control {
            border-bottom: 0;
        }
    }
    .field-wrap {
        display: flex;
        flex: 0 1 300px;
        .wrapper {
            width: 100%;
        }
        .form-control {
            display: block;
            background: transparent;
            border: 0;
            border-bottom: 1px dashed #83a4c5;
            width: 100%;
            outline: 0;
            padding: 5px;
            font-style: italic;
            color: $white;
            box-shadow: none;
            border-radius: 0;
        }
    }
    .hint {
        flex: 1 1 100%;
        text-align: right;
    }
    .field-checklist .combobox {
        height: initial;
        overflow: hidden;
        .mainRow {
            cursor: pointer;
            position: relative;
            .arrow {
                right: 0;
                position: absolute;
                top: 4px;
                width: 16px;
                height: 16px;
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: -webkit-transform 0.5s;
                transition: -webkit-transform 0.5s;
                transition: transform 0.5s;
                transition: transform 0.5s, -webkit-transform 0.5s;
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGdJREFUOI3tzjsOwjAURNGDUqSgTxU5K2AVrJtswjUsgHSR0qdxAZZFPrS+3ZvRzBsqf9MUtBtazJk+oMe0VTriiZCFX8nbpENMgfARjsn74vKj5IFruhfc8d6zIF9S/Hyk5HS4spMVeFcOjszaOwMAAAAASUVORK5CYII=");
                background-repeat: no-repeat;
            }
            &.expanded .arrow {
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
            }
        }
        .dropList {
            -webkit-transition: height 0.5s;
            transition: height 0.5s;
        }
    }
    .field-color input {
        width: 60px;
    }
    .field-color .helper {
        margin-left: 0.3em;
    }
    .field-switch {
        .label {
            position: relative;
            background: $c-dark;
            display: block;
            height: inherit;
            font-size: 0.7rem;
            text-transform: uppercase;
            border-radius: inherit;
        }
        .label {
            // box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15); 
        }
        .label:before,
        .label:after {
            position: absolute;
            top: 50%;
            margin-top: -.5em;
            line-height: 1;
            -webkit-transition: inherit;
            transition: inherit;
        }
        .label:before {
            content: attr(data-off);
            right: 11px;
            color: $c-light;
        }
        .label:after {
            content: attr(data-on);
            left: 11px;
            color: $c-medium;
            opacity: 0;
        }
        input:checked ~ .label {
            background: $c-light;
        }
        input:checked ~ .label:before {
            opacity: 0;
        }
        input:checked ~ .label:after {
            opacity: 1;
        }
        .field-wrap label {
            position: relative;
            display: block;
            vertical-align: top;
            width: 120px;
            height: 30px;
            padding: 0;
            margin: 0 10px 10px 0;
            border-radius: 15px;
            box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
        input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }
        .handle {
            position: absolute;
            top: 1px;
            left: 1px;
            width: 28px;
            height: 28px;
            background: -webkit-linear-gradient(top, $white 40%, #f0f0f0);
            background: linear-gradient(to bottom, $white 40%, #f0f0f0);
            background-image: -webkit-linear-gradient(top, $white 40%, #f0f0f0);
            border-radius: 100%;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        }
        .handle:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -6px 0 0 -6px;
            width: 12px;
            height: 12px;
            background: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);
            background: linear-gradient(to bottom, #eeeeee, #FFFFFF);
            background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);
            border-radius: 6px;
            box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
        }
        input:checked ~ .handle {
            left: 91px;
            left: calc(100% - ($field-switch-height - 1px));
            box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
        }
        .label,
        .handle {
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
    }
}
</style> -->

<!-- <style scoped>
html {
  font-family: Tahoma;
  font-size: 14px;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

fieldset {
  border: 0;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd;
}

.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;

  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-body {
  padding: 15px;
}

.field-checklist .wrapper {
  width: 100%;
}
</style> -->
