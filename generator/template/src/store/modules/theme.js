const state = {
  type:''
};
const mutations = {
  CHANGE_THEME:(state,theme) => {
    state.type = theme
  },
  RESET_STATE(state) {
    state.type = ''
  }
}
const actions = {

}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
