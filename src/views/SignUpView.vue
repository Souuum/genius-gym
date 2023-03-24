<script>
import SignUpForm from '../components/SignUpForm.vue';
export default {
    'name': "SignUpView",
    components: {
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
     width: 100vh;
 }
</style>