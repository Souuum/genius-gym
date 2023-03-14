<script>
import NavBar from '../components/NavBar.vue';
import "../assets/colors";
import WorkoutPreview from '../components/WorkoutPreview.vue';

export default {
    'name': "WorkoutView",
    components: {
        WorkoutPreview,
    },
    data() {
        return {
            isFetched: false,
            workouts: [],
        }
    },
    computed: {
        getWorkouts() {
            console.log(this.workouts);
            return this.workouts;
        }
    },
    beforeMount() {
        var wk = this;
        console.log('fetching workouts...')
        fetch(`http://localhost:3000/workouts/stock/exercises`)
            .then((response) => {
            console.log('fetched');
                return response.json();
            })
            .then((myJson) => {

                const workoutsByCategory = myJson.reduce((acc, workout) => {
                    if (!acc[workout.category]) {
                        acc[workout.category] = [];
                    }
                    acc[workout.category].push(workout);
                    return acc;
                    }, {});

                    console.log(workoutsByCategory);


                wk.workouts = workoutsByCategory;
                wk.isFetched = true;

                // console.log(wk.workouts)
            });
    },
};

</script>

<template>
    <div class="container flex justify-center">
        <WorkoutPreview v-if="isFetched" :workouts="getWorkouts"></WorkoutPreview>
    </div>
</template>


<style> .container {
     transition: 0.4s;
     width: 100%;
 }
</style>