import storage from '@/lib/storage'
import { fetchMenu } from "@/api"

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
 * @param refresh
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
