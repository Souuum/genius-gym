<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>

  <div class="container">
    <router-view v-slot="{ Component }">

      <Transition name="slide-fade" mode="out-in">
        <component :is="Component" ::key="$route.path"></component>
      </Transition>>

    </router-view>


  </div>
</template>

<style scoped>
body {
  transition: 0.4s;
  font-family: 'ASAP';
  background-image: linear-gradient(to top, #e27591, #eb6a84, #f25f74, #f85562, #fb4b4e);


}
</style>
