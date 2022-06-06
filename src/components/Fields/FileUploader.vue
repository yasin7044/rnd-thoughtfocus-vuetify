<template>
  <div class="file-uploader">
    <v-file-input
      v-model="files"
      chips
      counter
      multiple
      show-size
      dense
      outlined
      :loading="loading"
      truncate-length="35"
      :label="label"
    >
      <template #selection="{ index, text }">
        <v-chip close color="primary" @click:close="removeFile(index)">
          {{ text }}
        </v-chip>
      </template>

      <template #append-outer>
        <v-btn
          icon
          color="primary"
          class="pb-2"
          :loading="loading"
          @click.prevent.stop="handleUpload"
        >
          <v-icon>mdi-cloud-upload</v-icon>
        </v-btn>
      </template>
    </v-file-input>
    <v-card max-width="300">
      <v-img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        width="300"
        height="200"
      >
        <v-icon
          color="error"
          style="position: absolute; top: 8px; right: 8px"
          @click="dialog = !dialog"
        >
          mdi-delete
        </v-icon>
        <v-card-title>Image</v-card-title>
        <template v-slot:placeholder>
          <v-skeleton-loader type="image" />
        </template>
      </v-img>
    </v-card>
    <v-dialog v-model="dialog" hide-overlay width="300">
      <v-card color="primary" dark>
        <v-card-text>
          This will delete the image
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import useFieldBuilder from "mixins/use-fieldBuilder";

async function fakeUploadImage(files) {
  const response = [];
  return new Promise((resolve) => {
    setTimeout(() => {
      files.forEach((file) => {
        response.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      });
      resolve(response);
    }, 2000);
  });
}

export default {
  name: "FieldFileUploader",
  mixins: [useFieldBuilder],
  props: {
    url: {
      type: String,
      default: "www.example.com",
    },
  },
  data() {
    return {
      files: [],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    async handleUpload() {
      this.loading = true;
      const response = await fakeUploadImage(this.files);
      this.modelValue = response;
      this.loading = false;
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-uploader {
  padding: 20px;
  border: 1px solid #999797;
}
</style>
