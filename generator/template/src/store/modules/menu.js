const state = {
  activeTopNav:'',

}
const mutations = {
  SET_ACTIVE_TOP_NAV(state,value){
    state.activeTopNav = value
  },
  RESET_STATE(state) {
    state.activeTopNav = ''
  }
}
export default {
  namespaced:true,
  state,
  mutations
}
