/*
 * @Author: zhaobo 1427246356@qq.com
 * @Date: 2022-08-22 09:39:14
 * @LastEditors: zhaobo 1427246356@qq.com
 * @LastEditTime: 2022-08-24 12:25:17
 * @FilePath: \my-sitexxx\my-site-qian\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    devtool: "none",
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },

  

  };
} else {
  module.exports = {};
}
