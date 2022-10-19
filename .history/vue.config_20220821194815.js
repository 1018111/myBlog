/*
 * @Author: zhaobo 1427246356@qq.com
 * @Date: 2021-11-15 20:46:21
 * @LastEditors: zhaobo 1427246356@qq.com
 * @LastEditTime: 2022-08-21 19:48:04
 * @FilePath: \my-site\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
