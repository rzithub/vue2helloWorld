<template>
<div>
    <!-- v-on:anEvent="splitTitle($event)" -->
    <appheader v-bind:title="title" v-bind:subtitle="subtitle" ></appheader>
      
    <router-view></router-view>
    <!-- <mainbody></mainbody> -->

    <!-- <component v-bind:is="component" ></component> -->

      <!-- <div id="wrapper">
          <div id="float1"> <weblogin></weblogin> </div>
          <div id="float2"> <moblogin></moblogin> </div>
      </div> -->

    <!-- <keep-alive>
    <component v-bind:is="loginpage" ></component>
    </keep-alive> -->

    <!-- <keep-alive>
    <add-blog ></add-blog>
    </keep-alive> -->

    <!-- <showblog> </showblog> -->
  
    <appfooter v-bind:title="title" v-show="appfooter"></appfooter>

</div>
</template>

<script>
import appheader from './components/appheader.vue'
import appfooter from './components/appfooter.vue'


export default {

  components:{
    'appheader':appheader,
    'appfooter': appfooter
      },
  data(){
  return {
      title: 'Ask What You Want!',
      subtitle: 'Yes/No question only',
      component: 'yesno',
      loginpage: 'moblogin',
      appfooter:true


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
