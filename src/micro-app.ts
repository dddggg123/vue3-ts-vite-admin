const microApps = [
    {
      name: 'app-vue',
      entry: import.meta.env.VITE_APP_SUB_VUE as string,
      activeRule: '/app-vue'
    }
  ]
  
  const apps = microApps.map(app => {
    return {
      ...app,
      container: '#micro-content',
      props: {
        routerBase: app.activeRule // 下发基础路由
      },
      loader(loading: boolean) {
        console.log('loading', loading)
      }
    }
  })
  
  export default apps
  