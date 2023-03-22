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
    }

}
</script>

<template>
    <div class="form-container flex items-center justify-center">
        <form id="signin" class="bg-secondary-light pt-10 pr-40 pl-40 pb-10 flex-col items-center justify-items-center justify-center rounded-lg">
            <TextInput :placeHolder="'Email'" :name="'email'"></TextInput>
            <PasswordInput></PasswordInput>
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