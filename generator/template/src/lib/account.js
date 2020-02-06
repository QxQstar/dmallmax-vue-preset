import router from '@/router'
/**
 * 清空和登录账号相关的数据
 */
export function clearAccount() {

}

/**
 * 退出登录
 */
export function logout() {
  router.replace({
    path:'/account/login'
  })
  clearAccount();
}
