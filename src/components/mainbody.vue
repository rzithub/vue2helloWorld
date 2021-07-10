<template>
  <div id='books'>
    <ul>
      <li v-for="book in books" :key="book.name" v-on:click="book.show=!book.show">
        <h2 v-show="!book.show">{{book.name}}</h2>
        <h3 v-show="book.show" style="color: dodgerblue">نویسنده: {{book.author}}</h3>
      </li>
    </ul>
    <button @click="DeleteBook" > Delete One Book! </button>
  </div>
</template>

<script>
export default {
  //props:['books'], basic way
  props:{
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
      ]
    }
  },
  methods:{
    DeleteBook: function(){
      this.books.pop()
    }
  }
}
</script>

<style scoped>
div#body {
  text-align: center;
  color: white;
  background-color: rgb(171, 237, 240);
  padding: 10px;
  border-radius: 10px;
  margin-top: 0px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
flex-grow: 1;
flex-basis: 300px;
text-align: center;
padding: 10px;
border: 1px solid #222;
margin: 10px;
border-radius: 30px;
background-color: #ddd;
}
 button {
   align-self: center;
   position: inherit;
   align-content: center;
   position: relative;
   padding: 10px;
 }
 div#books{
   text-align: center;
   padding: 10px;
 }
</style>
