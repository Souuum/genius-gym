<script>
import NavBar from '../components/NavBar.vue';
import "../assets/colors";
import SignUpForm from '../components/SignUpForm.vue';
export default {
    'name': "SignUpView",
    components: {
        NavBar,
        SignUpForm,
    },
};
</script>

<template>
    <div class="container">
        <SignUpForm></SignUpForm>

    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
 }
</style>