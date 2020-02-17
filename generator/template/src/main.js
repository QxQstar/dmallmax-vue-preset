import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/element-ui/index.js'
import './filters/common/index.js'
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    Vue.prototype.$rootApp = this
  },
  render: h => h(App)
}).$mount('#app')
