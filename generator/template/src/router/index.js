import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Layout from '@/layout/main.vue'
const layoutRoutes = [];
const fullRoutes = [];
function classifyRoute(route) {
  if(route.meta && route.meta.fullPage) {
    fullRoutes.push(route)
  } else {
    layoutRoutes.push(route)
  }
}


// 得到各个模块定义的路由
const routeContext = require.context('./',true,/index\.js$/);

routeContext.keys().forEach(key => {
  // 如果是 router 根目录的 index.js 不做处理
  if(key.startsWith('./index')) {
      return
  }
  const routeModule = routeContext(key);
  if(Array.isArray(routeModule)) {
    routeModule.forEach(classifyRoute)
  } else {
    classifyRoute(routeModule);
  }
});

// 确保通配符路由放在最后
fullRoutes.sort((a,b) => {
  if(a.path === '*') return 1
  else if(b.path === '*') return -1
  else return 0
});

const router = new Router({
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      component:Layout,
      children:layoutRoutes
    },
    ...fullRoutes
  ]
});

export default router;
