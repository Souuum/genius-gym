<script>
import BigPanel from '../components/BigPanel.vue';
import "../assets/colors";
import { PRIMARY, WHITE } from '../assets/colors';
export default {
    'name': "HomePageView",
    beforeMount() {
        console.log(PRIMARY)
    },
    components: {
        BigPanel,
    },
    setup() {
        return { PRIMARY, WHITE };
    }

};

</script>

<template>
    <div class="container">
        <div class="bg-container">
            <div class="side-panel"></div>

        </div>
        <div class="nav-container">
            <nav>
                <ul>
                    <li><a class="nav">Home</a></li>
                    <li><a class="nav">Workouts</a></li>
                    <li><a class="nav">Custom pro<span>gram</span></a></li>
                </ul>
            </nav>
        </div>


    </div>
</template>


<style> .nav-container {
     background-color: none;
     display: flex;
     justify-content: flex-end;
     position: absolute;
 }

 nav {
     margin-top: 5%;
     width: 90%;
 }

 ul {
     width: 80vh;
     display: flex;
     justify-content: flex-end;
 }

 li {
     margin-left: 100px;
     list-style-type: none;
 }

 span {
     font-family: 'ASAP';
     font-weight: 600;
     font-size: 24px;
     color: var(--dark);
 }

 .nav {
     color: var(--lighter);
     text-decoration: none;
     font-family: 'ASAP';
     font-weight: 600;
     font-size: 24px;
 }

 .nav :hover {
     cursor: pointer;
 }

 .container {
     width: 100%;
     display: flex;
     background-color: var(--white);
 }

 .bg-container {
     position: absolute;
     display: flex;
     justify-content: flex-end;
     width: 100%;
 }

 .side-panel {
     display: flex;
     background-color: var(--primary);

     width: calc(100% - 70vw);
     height: 100vh;
     border-bottom-left-radius: 30px;
     z-index: -1;
 }
</style>