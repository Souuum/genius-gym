<script>
import TextInput from './TextInput.vue';
import PasswordInput from './PasswordInput.vue';
import Button from './Button.vue';
export default {
    name: "SignInForm",
    props: {
    },
    components: {
        TextInput,
        PasswordInput,
        Button
    }

}
</script>

<template>
    <div class="form-container">
        <form id="signin">
            <h1> Sign In</h1>
            <TextInput :placeHolder="'Email'" :name="'email'"></TextInput>
            <PasswordInput></PasswordInput>
            <Button :text="'Sign in'" :textColor="'var(--lesstransparent)'" :color="'var(--transparent)'"
                :hoverColor="'var(--lesstransparent)'" :marginTop="'10px'">Submit</Button>
        </form>
    </div>
</template>

<style>
.form-container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#signin {
    margin: 40px;
    background-color: var(--cleartransparent);
    border-radius: 5px;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    color: var(--white);
}
</style>