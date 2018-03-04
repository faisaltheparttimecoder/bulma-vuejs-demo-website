// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Import the Vue Route module for registering routes
import router from './router'

// Import the vue resource module for making HTTP request ( like POST / GET etc )
import Resource from 'vue-resource'

// Registering view plugins
Vue.use(Resource)

// Import global Vue compoments
import navBar from './components/navBar'
Vue.component('app-navbar', navBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
