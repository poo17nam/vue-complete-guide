import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken : null,
    userId : null,
    user:null
  },
  mutations: {
    authUser(state,userData){
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state,user){
      state.user = user
    }
  },
  actions: {
    signup({commit,dispatch},authData){
      axios.post('/signupNewUser?key=AIzaSyC1yj3si4EptmVX1BG_Ze4_p-OPkXzYcIc',{
        email : authData.email,
        password : authData.password,
        returnSecureToken : true
      })
      .then(res =>  {
        console.log(res)
        commit('authUser',{
          token : res.data.idToken,
          userId : res.data.localId
        })
        dispatch('storeUser',authData)
      })
      .catch(error => console.log(error))
    },
    login({commit},authData){
      axios.post('/verifyPassword?key=AIzaSyC1yj3si4EptmVX1BG_Ze4_p-OPkXzYcIc',{
        email : authData.email,
        password : authData.password,
        returnSecureToken : true
      })
      .then(res =>  {
        console.log(res)
        commit('authUser',{
          token : res.data.idToken,
          userId : res.data.localId
        })
      })
      .catch(error => console.log(error))
    },
    storeUser({commit,state},userData){
      if(!state.idToken){
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken,userData)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
    },
    fetchUser({commit,state}){
      if(!state.idToken){
        return
      }
      globalAxios.get('/users.json' + '?auth=' +state.idToken)
      .then(res => {
        console.log("res:",JSON.stringify(res,null,2))
        const data = res.data
        const users = []
        for(let key in data){
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log("Users:",JSON.stringify(users,null,2))
        //this.email = users[0].email
        commit('storeUser',users[0])
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    user(state){
      return state.user
    }
  }
})
