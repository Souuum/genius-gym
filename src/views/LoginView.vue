<script>
import SignInForm from '../components/SignInForm.vue';
export default {
    'name': "LoginView",
    components: {
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
     width: 100vh;
 }
</style>