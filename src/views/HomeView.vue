<script>
import SignUpButton from '../components/SignUpButton.vue';
import CirclePictureFrame from '../components/CirclePictureFrame.vue';
import WorkoutView from './WorkoutView.vue';

export default {
    'name': "HomeView",
    components: {
        SignUpButton,
        CirclePictureFrame,
        WorkoutView
    },
    data() {
        return {
            showSvg: true,
            lastScrollPosition: 0
        };
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition <= windowHeight / 3) {
                // L'utilisateur a atteint le haut de la page
                this.showSvg = true;
            } else {
                // L'utilisateur a fait défiler vers le bas
                this.showSvg = false;
            }
        }
    },

    mounted() {
        console.log(this.$store.state.user)
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};

</script>

<template>
    <div class="container">
        <section class="home">
            <div class="flex float-right mr-20 mt-10">
                <CirclePictureFrame
                    v-bind:style="{ 'background-image': 'url(../../public/images/pexels-murilo-botelho-1865131.jpg)' }"
                    :borderRadius="'60px'"></CirclePictureFrame>
            </div>
            <div class="flex-col max-w-3xl mx-20 mt-52">
                <p class="text-white text-5xl font-semibold">Workout programs made by
                    <span class="text-primary text-5xl font-semibold">you</span>
                    with a wide variety of exercises for
                    <span class="text-primary text-5xl font-semibold">everyone</span>
                </p>
                <SignUpButton></SignUpButton>
            </div>
            <div class="flex justify-center self-end w-full min-h-full bottom-0">
                <transition name="fade">
                    <svg v-show="showSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        class="w-10 h-10 animate-bounce stroke-primary stroke-2 absolute top-40">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </transition>
            </div>
        </section>
        <section class="workouts flex flex-col justify-center ">
            <h1 class="text-white text-6xl font-bold text-center">Some of our Workouts</h1>
            <WorkoutView></WorkoutView>
        </section>
    </div>
</template>


<style>


section {
    height: 80vh;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>