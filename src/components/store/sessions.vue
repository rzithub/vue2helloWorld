<template>
<div>
    <h1>All valid session</h1>
    <ul v-for="session in sessions">
        <li>
            <router-link v-bind:to="'/session/' + session.id " exact > 
            <p>store id: {{session.id}}</p> </router-link>
            <p>store name: {{session.store}}</p>
            <p>start : {{session.start}}</p>
            <p>length : {{session.length}}</p>
            </li>
    </ul>

</div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            sessions:[]
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/sessions/')
        .then( response => {
            console.log(response)
            this.sessions = response.data
        })
        .catch(err => { console.error(err) })
    }
}
</script>

<style scoped>

</style>
