import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/main.vue'
import { isLogin } from "@/lib/account"
import QS from 'qs';
import { ifFetchMenu } from '@/lib/menu'

Vue.use(Router);

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
  const routeModule = routeContext(key).default || [];
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

const createRouter = () => new Router({
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes:[
    {
      path:'/',
      redirect:'/home',
      component:Layout,
      children:layoutRoutes
    },
    // 无顶部导航和左侧导航的页面
    ...fullRoutes
  ]
});
const router = createRouter();
// 路由守卫
router.beforeEach(async (to,from,next) => {
  if(isLogin() || to.meta.noAuth) {
    await Promise.all([ifFetchMenu()]);
    next();
  } else {
    next({
      path: '/account/login',
      query: {
        redirect:encodeURIComponent(to.path+'?'+QS.stringify(to.query) )
      },
      replace: true
    })
  }
});
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRoute() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // reset router
}
export default router;
