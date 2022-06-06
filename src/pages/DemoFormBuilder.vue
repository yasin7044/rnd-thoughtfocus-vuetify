<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <DropField />
      </div>
      <div class="col-4">
        <DragField />
      </div>
    </div>
  </div>
</template>

<script>
import DragField from "components/DragAndDrop/DragField.vue";
import DropField from "components/DragAndDrop/DropField.vue";

export default {
  components: {
    DragField,
    DropField,
  },
};
</script>

<style lang="scss" scoped></style>
