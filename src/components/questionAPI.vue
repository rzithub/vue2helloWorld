<template>

    <div>
        <div>
        <ul>
            <li v-for="currency in info" > {{currency.code}}: <span v-html="currency.symbol"></span>{{currency.rate}} </li>
        </ul>
        </div>
        
        <div id="image">
            <img v-bind:src="imgURL" width=400 alt="" v-show=status>
            <div>
            <button @click="UpdateAPI" > Change!</button>
            <div>

            {{imgURL}}
            </div>

            </div>
        </div>
        

        
    </div>
    
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            info: 'null',
            imgURL:'',
            status:true
            }
    },
    created(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response =>  this.info = response.data.bpi)
        console.log("coin updated!")
        axios.get('https://yesno.wtf/api')
            .then(response => this.imgURL = response.data.image)
        console.log("get picture API!")
        console.log("I am mounted!")
        console.log(this.imgURL)
    },
    methods:{
        UpdateAPI: function(){
            console.log("Previous URL:")
            console.log(this.imgURL) 
            axios.get('https://yesno.wtf/api')
            .then(response => this.imgURL = response.data.image)
            console.log("New URL:")
            console.log(this.imgURL) 
        }
    }
}

</script>

<style scoped>
li {
    background-color: dodgerblue;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    color: white;
    margin-left:35% ;
    margin-right: 35%;
}
 div#image{
    text-align: center;     
    padding: 20px;
    border-radius: 20px;
 }
</style>
