<script>
import NavBar from '../components/NavBar.vue';
import BigPanel from '../components/BigPanel.vue';
import SignUpButton from '../components/SignUpButton.vue';
import "../assets/colors";
import { PRIMARY, WHITE } from '../assets/colors';
import CirclePictureFrame from '../components/CirclePictureFrame.vue';

const img =[
    {   name: 'img1',
        url: '../../public/images/pexels-murilo-botelho-1865131.jpg'},

]
export default {
    'name': "HomeView",
    beforeMount() {
        console.log(PRIMARY)
    },
    components: {
        NavBar,
        BigPanel,
        SignUpButton,
        CirclePictureFrame
    },
    setup() {
        return { PRIMARY, WHITE };
    }

};

</script>

<template>
    <div class="container">
        <div class="hero">
            <p>Workout programs made by you with a wide variety of exercises for everyone</p>
            <SignUpButton></SignUpButton>
        </div>
        <div>
        <CirclePictureFrame v-bind:style="{ 'background-image': 'url(../../public/images/pexels-murilo-botelho-1865131.jpg)' }" :borderRadius="'60px'"></CirclePictureFrame>
        </div>
    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
     height: 90vh;
 }

 .hero {
     max-width: 800px;
     margin-left: 80px;
     margin-top: 200px;
     display: flex;
     flex-direction: column;
     justify-content: center;
 }

 .hero p {
     background-clip: border-box;
     background: radial-gradient(ellipse farthest-corner at bottom left, #C4FCEF 60%, #74E6F2 100%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     color: var(--accent2grad);
     font-size: 48px;
     font-weight: 600;
 }
</style>