import { createStore } from "vuex";
import mutations from "./mutation";
import actions from "./actions";
import getters from "./getters";
// vuex-persistedstate 来做vuex数据持久化 防止刷新浏览器数据丢失
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    /** 所有路由 */
    permissionList: [],
    /** 导航菜单 */
    sidebarMenu: [],
    /* 面包屑导航列表 */
    crumbList: [],
    /** 当前active导航菜单 */
    currentMenu: "home",
    isSidebarNavCollapse: false,
  },
  mutations,
  actions,
  getters,
  // 数据持久化设置
  plugins: [
    createPersistedState({
      // 默认存储在localStorage 现改为sessionStorage
      storage: window.sessionStorage,
      // 本地存储数据的键名
      key: "MY_VUEX",
    }),
  ],
});
