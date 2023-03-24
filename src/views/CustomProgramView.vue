<script>
export default{
    name: "CustomProgramView",
    data(){

        var message = this.$store.state.user ? "Custom Program View" : "Please sign in to view this page";
        return{
            
            message: message,
        }
    }
}
</script>


<template>
    <div class="container">
        <h1>{{ message }}</h1>
    </div>
</template>


<style>
.container {
     transition: 0.4s;
     width: 100%;
 }</style>