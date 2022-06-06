export default {
  props: ["value"],
  computed: {
    modelValue: {
      get() {
        if (!this.value) {
          throw new Error("use-modelValue: v-model is required");
        }
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
