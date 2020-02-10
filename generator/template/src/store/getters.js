const getters = {
  account(state) {
    return state.account.userInfo.account
  },
  name(state){
    return state.account.userInfo.name
  }
}
export default getters
