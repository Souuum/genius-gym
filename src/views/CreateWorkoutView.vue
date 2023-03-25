<script>
import SignUpButton from '../components/SignUpButton.vue';
import ExerciseList from '../components/ExerciseList.vue';
import ExerciseComboBox from '../components/ExerciseComboBox.vue';
import Button from '../components/Button.vue';
import AddExerciseButton from '../components/AddExerciseButton.vue';

export default{
    name: "CustomProgramView",
    data() {
        var user = this.$store.getters.user;
        return {
            user,
            isFetched: false,
            exercises : [],
        };
    },
    components: { SignUpButton,
        ExerciseList,
        Button,
        ExerciseComboBox,
        AddExerciseButton,
    },
    computed: {
        getWorkouts() {
            return this.workouts;
        },
        getExercises() {
            return this.$store.getters.exercises;
        }
    },
    beforeMount() {
            var wk = this;
            console.log('fetching exercises...')
            fetch(`http://localhost:3000/exercises`)
                .then((response) => {
                console.log('exercises fetched');
                    return response.json();
                })
                .then((myJson) => {
                    if(!myJson){
                        console.log('no exercises found')
                        return;
                    }
                    else{
                        console.log('exercises found')
                        wk.$store.commit('exercises', myJson);
                        wk.exercises = myJson;
                        wk.isFetched = true;
                        console.log(wk.exercises)
                    }
                });
    },
}
</script>


<template>
    <div class="container" v-if="!user">
        <section class="customProgram flex justify-center">
            <div class="flex-col justify-center  w-4/5 ">
                <h1 class="text-white text-6xl font-bold text-center mt-40">Sign in to get 
                    <span class="text-primary text-6xl font-bold text-center mt-40">access to</span>
                    this page
                </h1>
                <div class="flex justify-center">
            <SignUpButton :sutext="'Get started'"></SignUpButton>

                </div>
            </div>
        </section>
    </div>
    <div class="container" v-else>
        <div class="flex-col justify-center">
                <h1 class="text-white text-6xl font-bold text-center mt-40">Welcome to
                    <span class="text-primary text-6xl font-bold text-center mt-40">your</span>
                    program space
                </h1>
                <div class="flex">
                    <div class="mt-40">
                <h3 class="text-white text-l font-semibold">Select an exercise to add to your workout</h3>
                <div class=" mr-96 flex flex-row">
                    <ExerciseComboBox></ExerciseComboBox>
                    <AddExerciseButton class="ml-4"></AddExerciseButton>
                </div>
                </div>
                    <ExerciseList></ExerciseList>


                </div>
            </div>
    </div>
</template>


<style>
.container {
     transition: 0.4s;
     width: 100%;

 }</style>