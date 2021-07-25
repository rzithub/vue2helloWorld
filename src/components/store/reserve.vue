<template>
    <div>
        <div id="input">
        <h1>Reserve you time</h1>
        <label>User ID: </label>
        <input type="text" v-model="user" value=3 placeholder="User ID"/>
        <label>Start time: </label>
        <input type="datetime-local" v-model="start"  placeholder="set time"/>

        <p>
            <button @click.prevent="submitData">Submit</button>
        </p>
        </div>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            store:this.$route.params.id,
            user:null,
            start:null,
            length:30
        }
    },
    methods:{
        submitData: function(){
            console.log(window.localStorage.getItem('accessToken'))
            axios.post('http://localhost:8000/api/sessions/',
            {
                "store": this.store,
                "user": this.user,
                "start": this.start,
                "length": this.length
            },
            {headers: 
                {"Authorization": "Bearer "+window.localStorage.getItem('accessToken')}
                }
            )
            .then(response => { console.log(response) })
            console.log('current user name: '+window.localStorage.getItem('username'))
            .catch(err => { console.error(err) })
        
        }
    }
}
</script>
<style scoped>
div#input{
    text-align: center;
    padding: 20px;
}
label{
    display:block;
    margin: 20px 0 10px;
}
input{
    
    padding: 10px;
    display: block;
    width: 70%;
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
}
</style>
