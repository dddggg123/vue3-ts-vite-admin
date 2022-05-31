/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

export function recursionRouter(userRouter: any[] = [], allRouter: any = []) {
  // console.log(userRouter,allRouter,1)
  const realRoutes: any[] = [];
  allRouter.forEach((v: any, _i: number) => {
    userRouter.forEach((item: any, _index: number) => {
      //根据type进行对比
      if (item.type === v.type) {
        if (item.children && item.children.length > 0) {
          v.children = recursionRouter(item.children, v.children);
        }
        realRoutes.push(v);
      }
    });
  });
  // console.log(realRoutes,2)
  return realRoutes;
}

/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute(routes: any[]) {
  routes.forEach((v: any, _i: number) => {
    if (v.children && v.children.length > 0) {
      v.redirect = { name: v.children[0].name };
      setDefaultRoute(v.children);
    }
  });
}
