<template>
    <div>
        <p>sesson detail</p>
        <ul>
            <li>session id: {{session.id}}</li>
            <li>session store: {{session.store}}</li>
            <li>session user: {{session.user}}</li>
            <li>session start: {{session.start}}</li>
            <li>session length: {{session.length}}</li>
            <li>session created: {{session.taken}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            id:this.$route.params.id,
            session:[]
        }
    },
    created() {
        console.log(this.id)
        axios.get('http://127.0.0.1:8000/api/sessions/'+this.id)
        .then(response => {
            console.log('save session')
            this.session =response.data
            console.log(response.data)
        })
        .catch(err => { console.error(err) })
    },
}
</script>
