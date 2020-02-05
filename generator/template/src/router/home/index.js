export default {
  name:'home',
  path:'/home',
  meta:{
    fullPage:false, // 是否全屏
  },
  component: () => import(/* webpackChunkName: "home" */ '@/views/home/main.vue')
}
