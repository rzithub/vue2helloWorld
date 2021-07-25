<template>
    <div>
        <h1>All Store</h1>
        <ul>
            <li v-for="store in stores" v-bind:key="store.store_name">
                <router-link v-bind:to="'/stores/'+store.id" exact> <h2>{{store.store_name}} </h2> </router-link>
                <p>{{store.store_desc}}</p>
                <p>store id: {{store.id}}</p>
                <p>store user: {{store.myUser}}</p>
                <ul v-for="comment in store.comments">
                    <li>{{comment}}</li>
                </ul>

            </li>
        </ul>
   
    </div>
    
</template>

<script>

import axios from 'axios'
import jwtDecode from 'jwt-decode'
// import router from '../../routes'


export default {

    data(){
        return{
            stores:[],
            accessToken: window.localStorage.getItem('accessToken'),
            refreshToken: window.localStorage.getItem('refreshToken'),
            accessTokenValid: false,
            refreshTokenValid:false
        }
    },
    created(){
        console.log('page is created')
        console.log('check token validation ...')
        this.checkLoggedIn()
        

    },
    mounted() {
        console.log('page is mounted')
        if (this.refreshTokenValid && this.accessTokenValid){
            console.log('refresh token is  valid ...')
            console.log('access token is  valid ...')
            this.getData() 
        } else if (this.refreshTokenValid && !this.accessTokenValid){
            console.log('refresh token is  valid ...')
            console.log('access token is not valid ...')
            this.getNewAccessToken()
        } else if (!this.refreshTokenValid && !this.accessTokenValid){
            console.log('refresh token is not valid ...')
                console.log('access token is not valid ...')
                console.log('go to auth page')
                this.$router.push('/auth')
        }
    },
    methods:{
        checkLoggedIn() {
            console.log('checkloggedin() method is started')
            if (Date.now()>jwtDecode(this.refreshToken).exp*1000) {
                console.log('refresh token has expired!')
            }else{
                // this.$router.push({name:'auth'});
                this.refreshTokenValid = true
                if (Date.now()>jwtDecode(this.accessToken).exp*1000){
                    console.log('access token has been expired')                                    
                }else{
                    console.log('access token is valid')
                    this.tokenValid = true
                }
            }
        },
        getData(){
            console.log('getData() method has started')
            axios.get('http://127.0.0.1:8000/api/store/',
            {headers: {"Authorization": "Bearer "+window.localStorage.getItem('accessToken')}})
            .then((response) => {
                this.stores = response.data
                console.log(response.data)
            })
            .catch(err => { console.error(err) })   
        },
        getNewAccessToken(){
            console.log('getNewAccessoken() method has started')
             axios.post('http://localhost:8000/api/token/refresh/',{"refresh": this.refreshToken})
            .then((response) => {
            console.log('new access: '+response.data.access)
            window.localStorage.setItem('accessToken',response.data.access)
            console.log('new access is set')
            this.getData()
            })
            .catch(err => { console.error(err) })
        }
        // getValidData(){
        //     console.log('use interceptor')
        //     axios.interceptors.request.use(
        //         (config) => {
        //             console.log('do some intercept')
        //             this.$http.get('http://127.0.0.1:8000/api/store/',
        //             {headers: {"Authorization": "Bearer "+window.localStorage.getItem('accessToken')}})
        //             .then(response => {
        //             this.stores = response.data
        //             }) 
        //             return config;
        //         }
        //     )
        // }
    }

}

</script>

<style scoped>
h1{
    text-align: center;
}
ul{
    list-style-type: none;
}
li{
    background: rgb(211, 211, 211);
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    color: rgb(15, 15, 15);

}
#persian{
    font: 300;
}

</style>