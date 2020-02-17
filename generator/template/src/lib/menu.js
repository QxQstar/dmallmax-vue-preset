import storage from '@/lib/localStorage'
import { fetchMenu } from "@/api"
import { isExternal } from "./validate";

export function getTopMenu() {
  return storage.get('topMenu')
}
export function setTopMenu(value) {
  return storage.set('topMenu',value)
}

export function getSlidMenu() {
  return storage.get('slidMenu')
}

export function setSlidMenu(value) {
  return storage.set('slidMenu',value)
}

/**
 * 获取菜单数据
 * @param refresh 是否更新保存在缓存中的数据
 * @returns {Promise<any>}
 */
export async function ifFetchMenu(refresh) {
  const oldData = getSlidMenu()
  if( !oldData || refresh ) {
    const { list } = await fetchMenu()
    const topNav = list.map(item => {
      const newItem = Object.assign({},item);
      delete newItem.children;
      return newItem
    })

    setSlidMenu(list)
    setTopMenu(topNav)
    return Promise.resolve(list)
  } else {
    return Promise.resolve(oldData)
  }
}


/**
 * 解析跳转路径
 * @param path 路径
 * @param belong 路径所属的系统
 * @returns {*}
 */
export function resolvePath(path,belong) {
  if(!path) return ''
  if (isExternal(path)) return path
  belong = ''
  return  belong + path
}
