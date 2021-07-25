<template>
    <div>
        <h1>Store Details</h1>
        
        <h2>Store name:{{store.store_name}}</h2>
        <h3>open and close: {{store.store_open_time}} - {{store.store_close_time}}</h3> 
        <ul v-for="session in sessions">
            <li>{{session}}</li>
        </ul>
        
        <button @click="showTime">time</button>
        <div id="dpicker">
            <div>
                 <date-picker id="dpicker"
                    v-model="start"
                    type="datetime"
                    view="days"
                    disable="Friday" 
                    label="Start Time"
                    :jumpMinute="60"
                    :roundMinute="true"
                    />

                <date-picker id="dpicker"
                    v-model="end"
                    type="datetime"
                    :min="start"
                    :disabled="!start"
                    disable="Friday" 
                    label="  End Time "
                    :jumpMinute="60"
                    :roundMinute="true"
                />
            </div>
       

            <button id="bpicker" @click="reserveDate">Reserve</button>

        </div>
        <div id="weekday">
            <nav id="weekday-nav">
                <ul id="schadule" v-for="(i,index) in 4">
                    <li> {{week[day.today+index]}}</li>
                </ul>
            </nav>
        </div>
        <div><reserve></reserve></div>
       
    </div>
    
</template>

<script>
import axios from 'axios'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
import reserve from './reserve.vue'

export default {
    components: {
      'datePicker': VuePersianDatetimePicker,
      'reserve':reserve
    },
    data(){
        return{
            id:this.$route.params.id,
            store:[],
            sessions:[],
            start:'',
            end:'',
            timeNow:Date.now(),
            week:['Sunday','Monday','Tuseday','Wedneday','Thursday','Friday','Saturday','Sunday','Monday','Tuseday','Wedneday','Thursday','Friday','Saturday'],
            day: {
                today: new Date().getDay()
                }

        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/store/'+this.id).then(response => {
            console.log(response.data)
            console.log(response.data.SESSIONs)
            this.store =  response.data
            this.sessions = response.data.SESSIONs
        })
        .catch(err => { console.error(err) })
    },
    methods:{
        reserveDate(){
            console.log('start: '+this.start)
            console.log('end: '+this.end)
            console.log(this.timeNow)
        },
        showTime(){

            console.log(this.day.today)
            console.log('today is: '+this.week[this.day.today])
            console.log(Date.now())
            console.log(this.timeNow)
            this.getTimeNow()

            
        },
        getTimeNow(){
            console.log('get new time')
            this.timeNow = Date.now()
            console.log(this.timeNow)
        }
            

        
    }
}
</script>

<style scoped>
#dpicker{
    padding: 4px;
    display:inline-block;margin-right:10px;
}
button{
    display:inline-block;
    padding: 5px;
    margin-right: 20%;
}
div#dpicker {
  display: flex;
  justify-content: space-between;
  margin: 10%;
}
ul#schadule{
    display: inline-block;
    text-decoration: none;
    list-style-type:none;
    padding: 6px 8px;
    text-align: center;

}
div#weekday{
    text-align: center;
}
nav{
    background: #555;
    color: white;
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 20px;
    margin-bottom: 30px;
}
</style>
