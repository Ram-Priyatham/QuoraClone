const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api/auth": {
        target: "http://10.20.5.40:8080", // http://192.168.156.50:8085/api/products/allProducts
        changeOrigin: true,
        // pathRewrite: { "^/api": "" },
      },
    },
    proxy: {
      "^/api/answer": {
        target: "http://10.20.3.153/:8087", // http://192.168.156.50:8085/api/products/allProducts
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
