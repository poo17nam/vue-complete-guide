import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
Vue.use(VueRouter) //Routing is enabled

const router = new VueRouter({
  routes,                        //Set up routes by passing routes in object
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
