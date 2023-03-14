<script>
import TextInput from './TextInput.vue';
import PasswordInput from './PasswordInput.vue';
import Button from './Button.vue';
export default {
    name: "SignUpForm",
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
        <form id="signup">
            <h1> Sign Up</h1>
            <TextInput :placeHolder="'Name'" :name="'name'"></TextInput>
            <TextInput :placeHolder="'Last Name'" :name="'lastName'"></TextInput>
            <TextInput :placeHolder="'Email'" :name="'email'"></TextInput>
            <PasswordInput></PasswordInput>
            <Button :text="'Sign up'" :textColor="'var(--lesstransparent)'" :color="'var(--transparent)'"
                :hoverColor="'var(--lesstransparent)'" :marginTop="'40px'">Submit</Button>
        </form>
    </div>
</template>

<style>
.form-container {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#signup {
    margin: 40px;
    background-color: var(--secondary-light);
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