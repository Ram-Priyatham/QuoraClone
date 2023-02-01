const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api/User": {
        target: "http://10.20.5.35:9080", // http://192.168.156.50:8085/api/products/allProducts
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
