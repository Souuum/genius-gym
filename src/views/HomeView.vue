<script>
import NavBar from '../components/NavBar.vue';
import BigPanel from '../components/BigPanel.vue';
import "../assets/colors";
import { PRIMARY, WHITE } from '../assets/colors';
export default {
    'name': "HomeView",
    beforeMount() {
        console.log(PRIMARY)
    },
    components: {
        NavBar,
        BigPanel
    },
    setup() {
        return { PRIMARY, WHITE };
    }

};

</script>

<template>
    <div class="container">

    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
     height: 100vh;
     background-image: linear-gradient(to top, #e27591, #eb6a84, #f25f74, #f85562, #fb4b4e);
 }
</style>