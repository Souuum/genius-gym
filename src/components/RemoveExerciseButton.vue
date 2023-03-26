<script>

import MdRemoveCircleIcon from 'vue-ionicons/dist/md-remove-circle.vue'

export default {
    name: "SettingButton",
    components: {
        MdRemoveCircleIcon,
    },
    methods: {
    removeExercise() {
      this.$emit('remove-exercise');
    },
  },

}

</script>


<template>
    <button class="flex items-center justify-center   " @click="removeExercise">
        <MdRemoveCircleIcon w="30px" h="30px" animate="beat" class="hover:text-primary hover:cursor-pointer"></MdRemoveCircleIcon>
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