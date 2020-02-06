export default [
  {
    name:'login',
    path:'/account/login',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "account" */ '@/views/account/login.vue')
  },
  {
    name:'modifyPw',
    path:'/account/modifyPw',
    meta:{
      fullPage:true
    },
    component: () => import(/* webpackChunkName: "account" */ '@/views/account/modifyPw.vue')
  }
]
