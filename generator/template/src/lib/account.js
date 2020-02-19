import router from '@/router'
import cookie from '@/lib/cookie'
import storage from '@/lib/localStorage'
import menuHelper from './menu';
import store from '@/store'
/**
 * 清空和登录账号相关的数据
 */
export function clearData() {
  cookie.clearAll();
  storage.clear();
  menuHelper.clearData();
  store.commit('RESET_USER_STATE')
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
