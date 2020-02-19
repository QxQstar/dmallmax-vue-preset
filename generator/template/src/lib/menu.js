import { fetchMenu } from "@/api"
import { isExternal } from "./validate"

let topMenu = '',
  slidMenu = ''
const menuObj = {
  getTopMenu() {
    return topMenu
  },
  getSlidMenu() {
    return slidMenu
  },
  setTopMenu(value) {
    topMenu = value;
  },
  setSlidMenu(value) {
    slidMenu = value
  },
  clearData(){
    menuObj.setTopMenu('')
    menuObj.setSlidMenu('')
  },
  /**
   * 获取菜单数据
   * @param {Boolean} isRefresh: 是否从接口中获取
   * @returns {Promise<{slidMenu: (*|string), topMenu: (*|string)}>}
   */
  async ifFetchMenu(isRefresh = false) {
    if( !menuObj.getSlidMenu() || isRefresh ) {

      const { list } = await fetchMenu()

      const topNav = list.map(item => {
        const newItem = Object.assign({},item);
        delete newItem.children;
        return newItem
      })

      menuObj.setSlidMenu(list)
      menuObj.setTopMenu(topNav)

      return Promise.resolve({
        topMenu:menuObj.getTopMenu(),
        slidMenu:menuObj.getSlidMenu()
      })
    } else {
      return Promise.resolve({
        topMenu:menuObj.getTopMenu(),
        slidMenu:menuObj.getSlidMenu()
      })
    }
  }
}



/**
 * 解析跳转路径
 * @param path 路径
 * @param belong 路径所属的系统
 * @returns {*}
 */
function resolvePath(path,belong) {
  if(!path) return ''
  if (isExternal(path)) return path
  belong = ''
  return  belong + path
}


export {
  resolvePath
}

export default menuObj
