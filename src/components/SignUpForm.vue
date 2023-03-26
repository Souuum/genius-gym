<script>
import TextInput from './TextInput.vue';
import PasswordInput from './PasswordInput.vue';
import Button from './Button.vue';
import SelectInput from './SelectInput.vue';
export default {
    name: "SignUpForm",
    props: {
    },
    components: {
        TextInput,
        PasswordInput,
        Button,
        SelectInput
    },
    methods: {
        async signup(credentials) {
            console.log(credentials);
            const _check = await fetch(`http://localhost:3000/auth/signup`, {
                            method: "POST",
                            headers: {
                            "Content-Type": "application/json",
            },
        body: JSON.stringify(credentials),
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));;
            if (_check && _check.response) {
                console.log("You successfully signed up!");
                alert("You successfully signed up!");
                this.$router.push('/LogIn');
            } else {
                console.log(
                    "Sign up failed",
                    _check.message ? _check.message : "Error"
                );
                alert("Sign up failed");
            }
        },
        getFormValues (submitEvent) {
            const formData = new FormData(submitEvent.target);
            const credentials = Object.fromEntries(formData);
            console.log(credentials);
            this.signup(credentials);
        }
    }

}
</script>

<template>
    <div class="form-container bg-secondary flex justify-center justify-items-center items-center ">
        <form id="signup" onsubmit="return false" @submit.prevent="getFormValues"
        class=" bg-secondary-light pt-10 pr-40 pl-40 pb-10 flex-col items-center justify-items-center justify-center rounded-lg">
            <TextInput :type="'text'" :placeHolder="'First Name'" :name="'firstName'"></TextInput>
            <TextInput :type="'text'" :placeHolder="'Last Name'" :name="'lastName'"></TextInput>
            <TextInput :type="'text'" :placeHolder="'Email'" :name="'email'"></TextInput>
            <TextInput :type="'password'" :placeHolder="'Password'" :name="'password'"></TextInput>
            <SelectInput></SelectInput>

            <Button :text="'Sign up'"
             class=" mt-10 w-32 h-10 rounded-md bg-secondary hover:bg-primary duration-300 font-medium text-white z-0">Submit</Button>
            <RouterLink to="/LogIn" id="signin-route" class="text-white ml-3 hover:text-primary">Or sign in</RouterLink>

        </form>
    </div>
</template>

<style>
.form-container {
    height: 90vh;
}
</style>