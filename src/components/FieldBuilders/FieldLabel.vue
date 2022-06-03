<template>
  <div>
    <label for="label">Label</label>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        id="label"
        aria-describedby="basic-addon3"
        v-model="modelValue"
      />
      <div v-if="!noDeleteBtn" class="input-group-append">
        <vs-button
          color="danger"
          icon="delete"
          @click="$emit('onDelete')"
        ></vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldLabel",
  props: {
    value: {
      type: String,
      default: "",
    },
    noDeleteBtn: Boolean,
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
};
</script>

<style></style>
