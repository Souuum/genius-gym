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
    }

}
</script>

<template>
    <div class="form-container bg-secondary flex justify-center justify-items-center items-center ">
        <form id="signup" class=" bg-secondary-light pt-10 pr-40 pl-40 pb-10 flex-col items-center justify-items-center justify-center rounded-lg">
            <TextInput :placeHolder="'Name'" :name="'name'"></TextInput>
            <TextInput :placeHolder="'Last Name'" :name="'lastName'"></TextInput>
            <TextInput :placeHolder="'Email'" :name="'email'"></TextInput>
            <PasswordInput></PasswordInput> 
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