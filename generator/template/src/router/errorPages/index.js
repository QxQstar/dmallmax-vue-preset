export default [
  {
    path:'/404',
    meta:{
      fullPage:true // 是否全屏
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/404.vue')
  },
  {
    path:'/401',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/401.vue')
  },
  {
    path:'*',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/404.vue')
  }
]
