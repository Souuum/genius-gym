<script>
import { RouterLink } from 'vue-router';
export default {
    name: "AddProgramButton",
    props: { 
        sutext: String,
    }

}

</script>


<template>
    <button class="mt-10 w-32 h-10 rounded-md bg-secondary-light hover:bg-primary duration-300 font-medium text-white">
        <RouterLink to="/createWorkout" id="signup-route" class="sutext">{{ sutext }}</RouterLink>
    </button>
</template>

<style>

</style>