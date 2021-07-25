<template>
    <div v-myTheme:column=blogWidth id='myBlog'>
        <button @click='changeWidth'>Change Width</button>
        <input type="text" v-model="search" placeholder="serch box"/>
          
        <div v-for="post in filteredBlog" id='blog'>
            <router-link v-bind:to="'/showblog/'+post.id" exact id="linkblog"> <h2 id='title' v-myColor>{{post.title | toUppercase |snippet20}}</h2>
             </router-link>
            <p id='content' v-myColor>{{post.body|snippet100}}</p>
            <hr>
        </div>
       
    </div>
    
</template>

<script>

import serachMixin from '../../mixins/searchMixin';
import axios from 'axios'

export default {

    data(){
        return{
            blog1:[],
            blog:[],
            blogWidth:'wide',
            search: ''
        }
    },
    methods:{
        changeWidth: function(){
            if(this.blogWidth == 'wide'){
                this.blogWidth = 'narrow'
            } else if (this.blogWidth == 'narrow'){
                this.blogWidth = 'wide'
            }
            console.log('blog width status is: '+ this.blogWidth)
            this.$forceUpdate();
        }

    },
    created(){
        console.log("get some data ")
        axios.get('http://jsonplaceholder.typicode.com/posts/').then(response => {
            console.log(response.data)
            console.log(response.status)
            this.blog = response.data
        })
        
    },
    computed:{
    
    
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet20(value){
            return value.slice(0,20)+'...';
        },
        'snippet100'(value){
            return value.slice(0,100)+'...';
        }
    },
    directives:{
        'myColor':{
            bind(el,binding,vnode){
            el.style.color = '#'+ Math.random().toString().slice(2,8);
            el.style.textDecorationLine = 'none';
    }
        },
        'myTheme':{
            bind(el,binding,vnode){
            if(binding.value == 'wide'){
                el.style.maxWidth = '1000px'
                el.style.marginLeft= '10%'
            } else if(binding.value = 'narrow'){
                el.style.maxWidth = '500px'
                el.style.marginLeft= '15%'
                el.style.marginRight= '15%'
                el.style.marginTop= '5%'
            }
            if(binding.arg == 'column'){
                el.style.background= '#ddd';
                el.style.padding= '10px';
            }
            }
        }
    },
    mixins:[serachMixin]     

}

</script>


<style scoped>

#blog{
    background: rgb(196, 196, 196);
    border-radius: 10px;
    border: solid 0px;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    /* max-width: 80%; */
    /* margin-left: 10%; */
}
#title{
    /* color: brown; */
    text-align: center;
    text-decoration-line: none;
}

#content{
    color: darkblue;
}
#myBlog{
}
linkblog{
    text-decoration: none;
}
</style>