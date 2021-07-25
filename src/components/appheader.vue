<template>
<div class=topnav>
        <router-link to='/' exact> Home </router-link>
        <router-link to='/add' exact> Add Blog </router-link>
        <router-link to='/api' exact> API </router-link>
        <router-link to='/books' exact> Books </router-link>
        <router-link to='/showblog' exact> Blogs </router-link>
        <!-- <li><router-link to='/auth' exact> Login </router-link></li> -->
        <router-link to='/stores' exact> Store </router-link>
        <router-link to='/session' exact> session </router-link>
        <!-- <p id='bustitle'>{{title}}</p> -->

    <div class="navbar-right">
      <span v-if="loggedinUser" id='bustitle'> Welcome {{loggedinUser}}
        <span @click="logout"> - logout</span>
        </span> 
      <span v-if="!loggedinUser" id='bustitle'> <router-link to='/auth' exact > Login </router-link></span>
    </div>
</div>
</template>

<script>
import {bus} from '../main';
import addBlog from './blogs/addBlog.vue';
import login from './logins/weblogin.vue';
import api from './questionAPI.vue';
import blogs from './blogs/showBlog.vue';
import book from './mainbody.vue';
import stores from './store/stores.vue';
import Auth from './pages/Auth.vue';
import session from './store/sessions.vue'




export default {
  components:{
    'add':addBlog,
    'login':login,
    'api':api,
    'blogs':blogs,
    'books':book,
    'showblog': blogs,
    'stores':stores,
    'Auth':Auth,
    'session':session

  },
  props:{
    title:{
      Type:String
    },
    subtitle:{
      Type:String
    }
  },
  data(){
    return {
      loggedinUser:null
    }
  },
  methods:{
    reverseSen(){
      this.title=this.title.split(' ').reverse().join(' ')
      //this.$emit('anEvent',this.title)
      bus.$emit('busEvent',this.title)
    },
    logout(){
        console.log('logout process start')
        window.localStorage.removeItem('accessToken')
        window.localStorage.removeItem('refreshToken')
        window.localStorage.removeItem('username')
 
        this.$router.push('/')
    }
  },
  created(){
    this.loggedinUser = window.localStorage.getItem('username')
  },

}
</script>

<style scoped>
.topnav{
    overflow: hidden;
    color: #fff;
    background: #444;
    padding: 10px;
    border-radius: 10px;
   
  }

.navbar-right{
  color: white;
  float:right;
}

.topnav a{
  float: left;
  color: #ddd;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 10px;
}

.router-link-exact-active {
  background: #222;
  color: #ddd;
}

</style>