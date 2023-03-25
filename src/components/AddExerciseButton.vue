<script>

import MdAddCircleIcon from 'vue-ionicons/dist/md-add-circle.vue'

export default {
    name: "SettingButton",
    components: {
        MdAddCircleIcon,
    },

}

</script>


<template>
    <button class="flex items-center justify-center ">
        <MdAddCircleIcon w="30px" h="30px" animate="beat" class="hover:text-primary"></MdAddCircleIcon>
    </button>
</template>

<style>
.ion {
  fill: var(--white);
}
.ion:hover{
    fill: var(--primary);
}

</style>