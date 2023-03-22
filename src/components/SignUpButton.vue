<script>
import { RouterLink } from 'vue-router';
export default {
    name: "SignUpButton",
    props: {
    }

}

</script>


<template>
    <button class="mt-10 w-32 h-10 rounded-md bg-secondary-light hover:bg-primary duration-300 font-medium text-white">
        <RouterLink to="/signUp" id="signup-route" class="sutext">Sign up</RouterLink>
    </button>
</template>

<style>

</style>