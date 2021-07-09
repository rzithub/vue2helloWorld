<template>
    <div v-myTheme:column=blogWidth id='myBlog'>
        <button @click='changeWidth'>Change Width</button>
        <input type="text" v-model="search" placeholder="serch box"/>
        <div v-for="post in filteredBlog" id='blog'>
            <h2 id='title' v-myColor>{{post.title | toUppercase |snippet20}}</h2>
            <p id='content' v-myColor>{{post.body|snippet100}}</p>
            <hr>
        </div>
    </div>
    
</template>

<script>

import serachMixin from '../../mixins/searchMixin';

export default {

    data(){
        return{
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        //console.log(data.body.slice(0,10))
        // console.log(data)
        // console.log(data.body)
        // console.log(data.header)
        // console.log(data.bodyText)
        this.blog = data.body.slice(0,5)
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
    /* max-width: 80%; */
    /* margin-left: 10%; */
}
#title{
    /* color: brown; */
    text-align: center;
}

#content{
    color: darkblue;
}
#myBlog{
}
</style>