<template>
  <div  id="head">
    <h1 @click="reverseSen">{{title}}</h1>
    <h3>{{subtitle}}</h3>
  </div>
</template>

<script>
import {bus} from '../main'
export default {
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

</style>