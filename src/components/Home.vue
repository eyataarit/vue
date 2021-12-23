<template>
    <div>
        <h1> Welcome dear visitor ! </h1>
        <div>
        You didn't sign up yet ? 
        <router-link :to="{path: 'signup'}" >Join Us </router-link>  
        </div>

        <div>
        You already have an account ? 
        <router-link :to="{path: 'login'}" >Login </router-link> 
        </div>
    </div>
</template>
<script>
export default{
    name:"Home",
    props:{
        msg:String
    },
};
</script>
<style>
</style>