<script>
export default {
    name: "TextInput",
    props: {
        placeHolder: String,
        name: String,
        type: String,
        value: String,
    },


}

</script>

<template>
    <div class="flex-col w-60">
    <label class="text-white text-left top-1" :for="name">{{ placeHolder }}</label>
    <input required class="mt-1 max-h-60 w-60 overflow-auto rounded-md bg-secondary py-2 pl-3 pr-10  text-base text-white placeholder-secondary-lighter shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" 
    :type="type" :placeholder="placeHolder" :name="name" :value="value"
    :class="type=='desc' ? 'h-28' : ''" />
    </div>
</template>

<style>
</style>