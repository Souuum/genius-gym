<script>
import NavBar from '../components/NavBar.vue';
import "../assets/colors";
import SignInForm from '../components/SignInForm.vue';
export default {
    'name': "LoginView",
    components: {
        NavBar,
        SignInForm,
    },
};
</script>

<template>
    <div class="container">
        <SignInForm></SignInForm>

    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
 }
</style>