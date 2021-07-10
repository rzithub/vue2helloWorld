<template>
  <nav>
    <ul>
      <li><router-link to='/' exact> Home </router-link></li>
      <li><router-link to='/add' exact> Add Blog </router-link></li>
      <li><router-link to='/api' exact> API </router-link></li>
      <li><router-link to='/books' exact> Books </router-link></li>
      <li><router-link to='/showblog' exact> Blogs </router-link></li>
      <li><router-link to='/login' exact> Login </router-link></li>
      <p id='bustitle'>{{title}}</p>
    </ul>
  </nav>
</template>

<script>
import {bus} from '../main';
import addBlog from './blogs/addBlog.vue';
import login from './logins/weblogin.vue';
import api from './questionAPI.vue';
import blogs from './blogs/showBlog.vue';
import book from './mainbody.vue'



export default {
  components:{
    'add':addBlog,
    'login':login,
    'api':api,
    'blogs':blogs,
    'books':book,
    'showblog': blogs
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
      
    }
  },
  methods:{
    reverseSen: function(){
      this.title=this.title.split(' ').reverse().join(' ')
      //this.$emit('anEvent',this.title)
      bus.$emit('busEvent',this.title)
    }
  }

}
</script>

<style scoped>
div#head {
  text-align: center;
  color: white;
  background-color: dodgerblue;
  padding: 10px;
  border-radius: 10px;
}
ul{
  list-style-type: none;
  text-align: left;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 4px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px;
  margin-bottom: 40px;
  margin-right: 0;
}
p#bustitle{
  
  color: aliceblue;
  text-decoration-line: underline;
  margin-left: 20% ;
  display: inline-block;
}
.router-link-active{
  background: #ddd;
  color: #444;
}

</style>