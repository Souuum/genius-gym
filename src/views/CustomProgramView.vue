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
    <h1>{{ message }}</h1>
</template>


<style></style>