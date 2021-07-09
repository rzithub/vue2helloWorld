export default {
    computed:{
        filteredBlog: function(){
            return this.blog.filter((post) => {
                return post.title.match(this.search);                
            })
    }
}}