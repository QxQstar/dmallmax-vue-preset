const state = {
  type:''
};
const mutations = {
  CHANGE_THEME:(state,theme) => {
    state.type = theme
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
