<script>
export default {
    name: "PasswordInput",
    props: {
    }

}
</script>

<template>
    <div class="flex-col w-60">
    <label class="text-white text-left top-1" for="password">Password</label>
    <input class=" mt-1 max-h-60 w-60 overflow-auto rounded-md bg-secondary placeholder-secondary-lighter py-2 pl-3 pr-10  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" 
    type="password" placeholder="password" name="password" />
    </div>

</template>

<style>
</style>