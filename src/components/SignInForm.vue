<script>
import TextInput from './TextInput.vue';
import PasswordInput from './PasswordInput.vue';
import Button from './Button.vue';
import { RouterLink } from 'vue-router';
export default {
    name: "SignInForm",
    props: {
    },
    components: {
        TextInput,
        PasswordInput,
        Button,
        RouterLink
    },
    methods: {
        async signin(credentials) {
            console.log(credentials);
            const _check = await fetch(`http://localhost:3000/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => response.json())
                .then((json) => {
                    return json;
                })
                .catch((err) => console.warn(err));

            if (_check && _check.authenticated) {
                console.log("You successfully signed in!");
                this.$store.commit('setUser', _check.user)
                // this.$store.dispatch('user', _check.user);
                this.$router.push('/customProgram');
            } else {
                console.log(
                    "Sign in failed",
                    _check.message ? _check.message : "Error"
                );
                alert("Incorrect email or password"); // Affiche une alerte si le mot de passe est incorrect
            }
        },

        getFormValues(submitEvent) {
            const formData = new FormData(submitEvent.target);
            const credentials = Object.fromEntries(formData);
            console.log(credentials);
            this.signin(credentials);
        }
    }

}
</script>

<template>
    <div class="form-container flex items-center justify-center">
        <form id="signin" onsubmit="return false" @submit.prevent="getFormValues"
            class="bg-secondary-light pt-10 pr-40 pl-40 pb-10 flex-col items-center justify-items-center justify-center rounded-lg">
            <TextInput :type="'text'" :placeHolder="'Email'" :name="'email'"></TextInput>
            <TextInput :type="'password'" :placeHolder="'Password'" :name="'password'"></TextInput>
            <Button :text="'Sign in'"
                class=" self-center mt-10 w-32 h-10 rounded-md bg-secondary hover:bg-primary duration-300 font-medium text-white">Submit</Button>
            <RouterLink to="/signUp" id="signup-route" class="text-white ml-3 hover:text-primary">Or sign up</RouterLink>


        </form>
    </div>
</template>

<style>
.form-container {
    height: 90vh;
}


h1 {
    color: var(--white);
}
</style>