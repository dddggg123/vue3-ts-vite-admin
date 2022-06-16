const getters = {
  getCrumbList: (state: any) => state.crumbList,
  getMenu: (state: any) => state.sidebarMenu,
  getCurrentMenu: (state: any) => state.currentMenu,
  getIsSidebarNavCollapse: (state: any) => state.isSidebarNavCollapse,
};
export default getters;
