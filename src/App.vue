<template>
<div>
    <div id="buttons">
      <button @click="switchlogin" >Switch Login</button>
      <button @click="appheader=!appheader" >Header</button>
      <button @click="mainbody=!mainbody" >mainbody</button>
      <button @click="yesno=!yesno" >yesno</button>
      <button @click="twoculomn=!twoculomn" >twoculomn</button>
      <button @click="loginagestat=!loginagestat" >Login page</button>
      <button @click="appfooter=!appfooter" >Footer</button>
      <button @click="addblogstat=!addblogstat" >addBlog</button>
      <button @click="showblogstat=!showblogstat" >showBlog</button>
    

    </div>
      <!-- v-on:anEvent="splitTitle($event)" -->
    <appheader v-bind:title="title" v-bind:subtitle="subtitle" v-show="appheader"></appheader>
      
    <router-view></router-view>
    <mainbody v-bind:books="books" v-show="mainbody">
      <div slot="1">
      <h3>This is my new title</h3>
      </div>
    </mainbody>

    <component v-bind:is="component" v-show="yesno"></component>

      <div id="wrapper" v-show="twoculomn">
          <div id="float1"> <weblogin></weblogin> </div>
          <div id="float2"> <moblogin></moblogin> </div>
      </div>

    <keep-alive>
    <component v-bind:is="loginpage" v-show="loginagestat"></component>
    </keep-alive>
    <keep-alive>
    <add-blog v-show="addblogstat"></add-blog>
    </keep-alive>
    <showblog v-show="showblogstat"> </showblog>
  

    <appfooter v-bind:title="title" v-show="appfooter"></appfooter>
</div>
</template>

<script>
import appheader from './components/appheader.vue'
import appfooter from './components/appfooter.vue'
import mainbody from './components/mainbody.vue'
import yesno from './components/questionAPI.vue'
import weblogin from './components/logins/weblogin.vue'
import moblogin from './components/logins/mobilelogin.vue'
import addBlog from './components/blogs/addBlog.vue'
import showblog from './components/blogs/showBlog.vue'

export default {

  components:{
    'appheader':appheader,
    'appfooter': appfooter,
    'mainbody': mainbody,
    'yesno':yesno,
    'weblogin': weblogin,
    'moblogin': moblogin,
    'add-blog':addBlog,
    'showblog':showblog
  },
  data(){
  return {
        books:[
        {name:'کلیدر',author:'محمود دولت آبادی',show:false},
        {name:'زمین سوخته',author:'احمد محمود',show:false},
        {name:'شازده احتجاب',author:'هوشنگ گلشیری',show:false},
        {name:'از رنجی که میبریم',author:'جلال آل احمد',show:false},
        {name:'سووشون',author:'سیمین دانش‌ور',show:  false},
        {name:'چراغ ها را من خاموش می‌کنم',author:'زویا پیرزاد',show:  false},
      ],
      title: 'Ask What You Want!',
      subtitle: 'Yes/No question only',
      component: 'yesno',
      loginpage: 'moblogin',
      appheader: false,
      mainbody:false,
      yesno:false,
      twoculomn:false,
      loginagestat:false,
      appfooter:false,
      loginagestat:false,
      addblogstat:false,
      showblogstat:false


    }
  },
  methods:{
    // splitTitle: function(newTitle){
      // this.title = newTitle
    // }
    switchlogin: function() {

      if (this.loginpage == 'weblogin') {
        this.loginpage = 'moblogin';
       }else {
         this.loginpage = "weblogin";
      }
    }
  }
}


</script>

<style scoped >
#wrapper {
    width: 100%;
    /*border: 1px solid black;*/
    overflow: hidden;
}
div#float1 {
    width: 50%;
    float:left; /* add this */
    /*border: 1px solid red;*/
}
div#float2 {
    /*border: 1px solid green;*/
    overflow: hidden;
}
button{
  padding: 10px;
  margin: 5px;
}
div#buttons {
  text-align: center;
}

</style>
