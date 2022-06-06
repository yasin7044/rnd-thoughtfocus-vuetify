import useValidation from "./use-validation";
import useModelValue from "./use-modelValue";

export default {
  mixins: [useValidation, useModelValue],
  props: {
    schemas: {
      type: Array,
      default: () => [],
    },
    label: String,
  },
};
