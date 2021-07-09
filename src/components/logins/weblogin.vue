<template>
    <div id="form">
        <div id="header">
            <h1>Fill the entire form completely</h1>
        </div>
        <div id="info">
            <h3>use correct answer to expedite your procedure!</h3>
        </div>
        <div id="form">
            <span id="username">
                <p>Username</p>
                <p>
                    <input type="text" placeholder="username or email">
                </p>
            
            </span>
            <span id="password">
                <p>password</p>
                <p>
                    <input type="password" placeholder="password">
                </p>
            </span>
            <button>Submit</button>
        </div>
        <div id="link">
            <a href="#">link 1</a>
            <a href="#">link 2</a>
            <a href="#">link 3</a>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    }

}
</script>

<style scoped>
div{
    text-align: center;
    border-width: 3px solid #222;
    background: cornflowerblue;
    border-radius: 10px;
    padding: 10px;
}
a {
    padding: 5px;
    color: white;
}
button{
    padding: 6px;
}
input {
    padding: 10px;
    border-radius: 10px;
    border-width: 1px solid #000;
}
</style>