<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>

  <div class="container">
    <router-view v-slot="{ Component }">

      <Transition name="slide-fade" mode="out-in">
        <component :is="Component" ::key="$route.path"></component>
      </Transition>

    </router-view>


  </div>
</template>

<style scoped>
body {
  background: transparent;
  transition: 0.4s;
  font-family: 'ASAP';
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
