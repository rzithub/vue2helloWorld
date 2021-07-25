import Vue from 'vue'
import App from './App.vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css's
import VueSession from 'vue-session'
// import qs from 'qs'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vuex from 'vuex'


// Vue.forceUpdate();
// Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(Vuetify);
Vue.use(VueSession);
// Vue.use(qs);
// Vue.use(Vuex);
// Vue.use(VueAxios,axios);

/* eslint-disable */

Vue.config.productionTip = false

const router=new VueRouter({
  routes: Routes,
  mode: 'hash',
})

// const store = new Vuex.Store({
//   state: {
//     jwt: localStorage.getItem('t'),
//     endpoints: {
//       obtainJWT: 'http://1270.0.0:8000/api/token',
//       refreshJWT: 'http://1270.0.0:8000/api/token/refresh'
//     }
//   },
//   mutations: {
//     updateToken(state, newToken){
//       localStorage.setItem('t', newToken);
//       state.jwt = newToken;
//     },
//     removeToken(state){
//       localStorage.removeItem('t');
//       state.jwt = null;
//     }
//   },
//   actions:{
//     obtainToken(username, password){
//       const payload = {
//         username: username,
//         password: password
//       }
//       axios.post(this.state.endpoints.obtainJWT, payload)
//         .then((response)=>{
//             this.commit('updateToken', response.data.token);
//           })
//         .catch((error)=>{
//             console.log(error);
//           })
//     },
//     refreshToken(){
//       const payload = {
//         token: this.state.jwt
//       }
//       axios.post(this.state.endpoints.refreshJWT, payload)
//         .then((response)=>{
//             this.commit('updateToken', response.data.token)
//           })
//         .catch((error)=>{
//             console.log(error)
//           })
//     }
//     inspectToken(){
//       const token = this.state.jwt;
//       if(token){
//         const decoded = jwt_decode(token);
//         const exp = decoded.exp
//         const orig_iat = decode.orig_iat
//         if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
//           this.dispatch('refreshToken')
//         } else if (exp -(Date.now()/1000) < 1800){
//           // DO NOTHING, DO NOT REFRESH          
//         } else {
//           // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
//         }
//       }
//     }
//   }
//   })

export const bus = new Vue();

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
