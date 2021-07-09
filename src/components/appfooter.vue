<template>
  <div >
    <h5>{{copyright}}-{{title}}</h5>
  </div>
</template>

<script>
import {bus} from '../main'
export default {
  props:{
    title:{
      type:String
    }
  },
  data:function(){
    return {
      copyright: 'CopyRight 2022'
    }
  },
  created: function(){
    bus.$on("busEvent", (data) => {
      this.title = data
    })
  }

}
</script>

<style scoped>
h5 {
  text-align: center;
  color: white;
  background-color: #222;
  padding: 10px;
  border-radius: 10px;
  margin-top: 0;
}

</style>
