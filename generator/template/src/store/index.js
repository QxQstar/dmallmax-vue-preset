import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './theme.js' => 'theme'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  mutations:{
    /**
     * 清空与这个登录账号相关的数据
     * @constructor
     */
    RESET_USER_STATE(){
      store.commit('account/RESET_STATE')
      store.commit('menu/RESET_STATE')
    }
  }
})

export default store
