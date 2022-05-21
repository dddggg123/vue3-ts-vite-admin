const getters = {
    getCrumbList: (state: any) => state.crumbList,
    GET_MENU:(state:any)=>state.sidebarMenu,
    getCurrentMenu:(state:any)=>state.currentMenu,
    getIsSidebarNavCollapse:(state:any)=>state.isSidebarNavCollapse
}
export default getters