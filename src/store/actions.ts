// 后端路由
import { setDefaultRoute } from "@/utils/router-recursion";
//固定路由
import router, { DynamicRoutes } from "@/router/index";
import view from "@/components/view/view.vue";

function typeOf(obj: any): any {
  const toString: any = Object.prototype.toString;
  const map: any = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  return map[toString.call(obj)];
}
function clone(data: any): any {
  const t = typeOf(data);
  let o: any;

  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }

  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(clone(data[i]));
    }
  } else if (t === "object") {
    for (const i in data) {
      o[i] = clone(data[i]);
    }
  }
  return o;
}

const actions = {
  async FETCH_PERMISSION({ commit }: any, permissionList: Array<object>) {
    //处理需要动态的路由
    const routes: Array<any> = filterAsyncRouter(permissionList);
    //不需要动态的路由（深拷贝）
    const MainContainer = clone(DynamicRoutes).find((v: any) => v.path === "");
    let children: Array<any> = [];
    children = MainContainer.children;
    //将两种路由结合生成左边的导航栏
    children = children.concat(routes);
    commit("SET_MENU", children);
    MainContainer.children = children;
    setDefaultRoute([MainContainer]);
    /*  初始路由 */
    const initialRoutes = router.options.routes;
    router.addRoute(MainContainer);
    /* 完整的路由表 */
    // @ts-ignore //忽略提示
    commit("SET_PERMISSION", [...initialRoutes, ...DynamicRoutes]);
  },
  /**
   * 清空动态路由和菜单栏
   */
  async CLEAR_ALL_ROUTES({ commit }: any) {
    commit("SET_MENU", []);
    commit("SET_PERMISSION", []);
  },
};
export const loadView = (view: String) => {
  // 路由懒加载
  return view;
};

//递归处理后端数据
function filterAsyncRouter(asyncRouterMap: Array<any>) {
  return asyncRouterMap.filter((route: any) => {
    if (route.children) {
      route.component = view;
    } else {
      route.component = loadView(route.component);
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    } else {
      delete route["children"];
      delete route["redirect"];
    }
    return true;
  });
}

export default actions;
