import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
Vue.use(VueRouter) //Routing is enabled

const router = new VueRouter({
  routes,                        //Set up routes by passing routes in object
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return { selector : to.hash}
    }
    return { x:0,y:0}
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
