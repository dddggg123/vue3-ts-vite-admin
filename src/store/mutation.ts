const mutations = {
  /* 面包屑导航列表 */
  SET_CRUMB_LIST(state: any, list: Array<any>) {
    state.crumbList = list;
  },
  //左边导航栏列表
  SET_MENU(state: any, menu: Array<any>) {
    state.sidebarMenu = menu;
  },
  /* 完整的路由表 */
  SET_PERMISSION(state: any, routes: Array<any>) {
    state.permissionList = routes;
  },
  //当前选中的导航
  SET_CURRENT_MENU(state: any, currentMenu: string) {
    state.currentMenu = currentMenu;
  },
};
export default mutations;
