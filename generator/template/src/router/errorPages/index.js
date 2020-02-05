export default [
  {
    path:'/404',
    meta:{
      fullPage:true // 是否全屏
    },
    component: () => import(/* webpackChunkName: "404" */ '@/view/errorPages/404.vue')
  },
  {
    path:'/401',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/view/errorPages/401.vue')
  },
  {
    name:'*',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/view/errorPages/404.vue')
  }
]
