<script>
import MdSettingsIcon from 'vue-ionicons/dist/md-settings.vue'

export default {
    name: "SettingButton",
    components: {
        MdSettingsIcon,
    },

}

</script>


<template>
    <button class="flex items-center justify-center ">
        <MdSettingsIcon  w="24px" h="24px" animate="rotate" color="#FFFFFF" class="mt-1"></MdSettingsIcon>
    </button>
</template>

<style>
.ion {
  fill: var(--white);
}


</style>