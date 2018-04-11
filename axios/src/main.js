import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-update-fcca.firebaseio.com'
//axios.defaults.headers.common['Authorization'] = 'fssrfwrv'
axios.defaults.headers.get['Accepts'] = 'application/json'

var reqInterceptors = axios.interceptors.request.use(config => {
  console.log("Request Interceptor : ",config);
  return config
})

var resInterceptors = axios.interceptors.response.use(res => {
  console.log("Response Interceptor : ",res);
  return res
})

//To remove interceptors
axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
