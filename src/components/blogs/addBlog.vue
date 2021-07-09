<template>
    <div id="allcontent">
        <div id="add-blog">
            <h1>Add New Post</h1>
            <form v-show="!status.form">
                <label >Post Title:</label>
                <input type="text" v-model.lazy="blogs.title" />
                <label >Content</label>
                <textarea type="text" v-model.lazy="blogs.content"/>
                
                <div id="checkboxes">
                    <label> Post</label>
                    <input type="checkbox" value="post" v-model="blogs.categories"/>
                    <label> Gallery</label>
                    <input type="checkbox" value="gallety" v-model="blogs.categories"/>
                    <label> Comment</label>
                    <input type="checkbox" value="comment" v-model="blogs.categories"/>

                </div>

                <div id="author">
                    <label> Author: </label>
                    <select v-model="blogs.author">
                        <option v-for="author in authors" :key="author.id" >{{author}}</option>

                    </select>
                </div>
                <p>
                    <button v-on:click.prevent="postpost">Submit Post</button>
                </p>
            </form>
                <p v-show="status.form">{{status.post}}</p>
            <div>

                <h3>preview blog</h3>

                <div id="preview">
                    <p id="blogtitle"> {{blogs.title}}</p>
                    <p id="blogcontent"> {{blogs.content}}</p>
                    <div id="category">
                        <ul>
                            <li v-for="category in blogs.categories" :key="category.id"> {{category}}</li>
                        </ul>
                    </div>
                    <hr v-show="blogs.author">
                <p v-show="blogs.author">Author: {{blogs.author}}</p>

                </div>

            </div>
                    <button @click="forceUpdate">Clear Form!</button>

        </div>
    </div>
    
</template>

<script lang="ts">
import axios from 'axios';

export default {

data(){
    return{
        blogs:{
            title:'',
            content:'',
            categories:[],
            author:''
        },
        authors:['','Reza','Bahar','Naser'],
        postURL: 'http://jsonplaceholder.typicode.com/posts',
        status:{
            post:'',
            form:false
        }
    }
},
methods:{
    postpost:function(){
        console.log('I am posting new post blog!')
        this.$http.post(this.postURL,{
            title:this.blogs.title,
            body:this.blogs.content,
            userId: 1

            }).then(Response => {
            console.log(Response.status)
            this.status.form = !this.status.form
            this.status.post = 'Your blog successfully posted.'
        })
        /*axios.post(this.postURL, {
            title:this.blogs.title,
            body:this.blogs.content,
            userId: 1
            }).then(Response => {
            console.log(Response.status)
            this.status = 'Done!'

        })*/
    },
    forceUpdate: function(){
        this.status.form = !this.status.form
        this.blogs.title = ''
        this.blogs.content=''
        this.blogs.author=''
        this.blogs.categories=[]
        this.$forceUpdate();
        console.log('re-render component')
    }   
}   
        
  
}
</script>

<style scoped>

#allcontent{
    border: 1px solid #222;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
}

#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px;
    max-width: 100%;
   
    

}
label{
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],textarea {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
}
#preview {
    border: 2px solid #145;
    padding: 10px;
    font-family: 'Segoe UI';
}
#blogtitle{
    text-align: center;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label {
    display: inline-block;
}
</style>
