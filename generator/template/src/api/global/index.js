import {fetch} from '@/lib/http.js';
import store from '@/store'
let baseURL = process.env.VUE_APP_BASEURL

export function fetchMenu() {
  return fetch(baseURL+'/account/menu/get',{
    account:store.getters.account
  })
}
