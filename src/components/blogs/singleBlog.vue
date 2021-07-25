<template>
    <div id="single-blog">
        <h1>{{this.blog.title}}</h1>
        <article>{{this.blog.body}}</article>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:[]
        }
    },
    created(){
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(response =>{

        this.blog = response.data
        console.log(this.blog)
    })
},

}
</script>

<style scoped>

h1 {
    text-align:center;

}
 article{
     background: rgb(211, 211, 211);
     padding: 10px;
     margin: 5px;
 }
</style>
