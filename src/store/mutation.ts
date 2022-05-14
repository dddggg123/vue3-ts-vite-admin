const mutations = {
    /* 面包屑导航列表 */
    setCrumbList(state: any, list: Array<any>) {
        state.crumbList = list;
    },
    //左边导航栏列表
    SET_MENU(state: any, menu: Array<any>) {
        state.sidebarMenu = menu;
    },
    /* 完整的路由表 */
    SET_PERMISSION(state: any, routes: Array<any>) {
        state.permissionList = routes;
    }
}
export default mutations