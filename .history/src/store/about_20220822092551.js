/*
 * @Author: zhaobo 1427246356@qq.com
 * @Date: 2021-11-15 20:46:21
 * @LastEditors: zhaobo 1427246356@qq.com
 * @LastEditTime: 2022-08-22 09:25:51
 * @FilePath: \my-site\src\store\about.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getAbout } from "@/api/about";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: "",
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchAbout(ctx) {
      if (ctx.state.data) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getAbout();
      debugger
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
