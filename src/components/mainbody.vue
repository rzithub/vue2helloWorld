<template>
  <div id='books'>
    <slot name="2"></slot>
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
    books:{
      Type:Array,
      required:true
    }
  },
  data(){
    return {
  
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
