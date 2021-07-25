<template>
  <div id="form">
    <div>
      <label> username</label>
      <span>
        <input type="text" placeholder="username" v-model="payload.username">
      </span>
    </div>
     <div>
      <label> Password</label>
      <span>
        <input type="password" placeholder="password" v-model="payload.password">
      </span>
    </div>
    <div><button @click="login">Submit Data</button></div>

  </div>
    

</template>

<script>
import axios from 'axios'
// import router from '../../routes'
import jwtDecode from 'jwt-decode'

export default {

    data(){
      return{
        accessToken: localStorage.getItem('access_token'),
        url:'http://localhost:8000/api/token/',
        payload:{
          username:'testuser',
          password:'saya1393',
        },
        timeout:0
 
      }
    },
    methods: {
        login() {  
                          
              // this.$axios.post(this.url, {username:this.user, password:this.pass}).then(data => {
              //   console.log(data)
              //   // this.$session.set('token', res.data.token);
              //   // router.push('/');
              // })
              axios.post('http://localhost:8000/api/token/',this.payload,this.timeout)
              .then(response => {
                console.log('access token: '+response.data.access);
                console.log('refresh token: '+response.data.refresh);
                console.log(response);
                localStorage.setItem('accessToken',response.data.access);
                localStorage.setItem('refreshToken',response.data.refresh);
                // this.$session.start();
                // this.$session.set('token', response.data.token);
                this.$router.push({name:'stores'});
                console.log(this.accessToken);
                console.log('access expire: '+jwtDecode(response.data.access).exp)*1000;
                console.log('refresh expire: '+jwtDecode(response.data.refresh).exp)*1000;
                console.log('current time: '+ Date.now())
                localStorage.setItem('username',this.payload.username)
                console.log('current user: ' + localStorage.getItem('username'))
              })
              .catch(err => { console.error(err) })
          }
    },
    created(){
    
    }
        
   
}
</script>
<style scoped>

label{
  padding: 10px;
}
input{
  padding: 10px;
  border: solid 1px #111;
  margin: 10px;
}
button{
  text-align: center;
  padding: 5px;
  border: solid 1px #111;
  margin: 30px;
}
#form{
  text-align: center;
}
</style>