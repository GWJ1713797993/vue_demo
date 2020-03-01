const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },

  // 构建输出目录
  outputDir:"./server/dist" //构建输出目录
};
