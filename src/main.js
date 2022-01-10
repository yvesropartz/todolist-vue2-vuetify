import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './plugins/vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  vuex,
  render: h => h(App)
}).$mount('#app')
