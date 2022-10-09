import Vue from 'vue'
import './plugins/axios'
import App from './App'
import './assets/tailwind.css'
import router from './router'
import './plugins/fontawesome'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
