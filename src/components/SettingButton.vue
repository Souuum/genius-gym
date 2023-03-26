<script>
import MdSettingsIcon from 'vue-ionicons/dist/md-settings.vue'

export default {
    name: "SettingButton",
    components: {
        MdSettingsIcon,
    },
    methods: {
    modify() {
      this.$emit('modify');
    },
}, 

}

</script>


<template>
    <button class="flex items-center justify-center " @click="modify()">
        <RouterLink to="/modifyWorkout" id="modify-route" class="sutext">
            <MdSettingsIcon  w="24px" h="24px" animate="rotate" class="mt-1"></MdSettingsIcon>
        </RouterLink>
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