const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src/"),
        components: path.resolve(__dirname, "src/components/"),
        pages: path.resolve(__dirname, "src/pages/"),
        mixins: path.resolve(__dirname, "src/mixins/"),
      },
    },
  },
};
