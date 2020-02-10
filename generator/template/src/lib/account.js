import router from '@/router'
import cookie from '@/lib/cookie'
import storage from '@/lib/localStorage'

/**
 * 清空和登录账号相关的数据
 */
export function clearData() {
  cookie.clearAll();
  storage.clear();
}

/**
 * 退出登录
 */
export function logout() {
  router.replace({
    path:'/account/login'
  });
  clearData();
}

/**
 * 是否已经登录
 */
export function isLogin() {
  return cookie.get('lshLogin') + '' === '1'
}
