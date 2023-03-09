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
        <p>proutdsfasdft</p>
        <Transition name="slide-fade" mode="out-in">
            <SignInForm></SignInForm>

        </Transition>>
    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
     height: 100vh;
     background-image: linear-gradient(to top, #e27591, #eb6a84, #f25f74, #f85562, #fb4b4e);
 }

 .slide-fade-enter-active {
     transition: all 0.3s ease-out;
 }

 .slide-fade-leave-active {
     transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
 }

 .slide-fade-enter-from,
 .slide-fade-leave-to {
     transform: translateX(20px);
     opacity: 0;
 }
</style>