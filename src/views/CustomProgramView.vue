<script>
import SignUpButton from '../components/SignUpButton.vue';
import WorkoutPreview from '../components/WorkoutPreview.vue';
import AddProgramButton from '../components/AddProgramButton.vue';

export default{
    name: "CustomProgramView",
    data() {
        var user = this.$store.getters.user;
        var home = this.$route.path == '/';
        return {
            user,
            home,
            workouts :[],
            exercises : [],
        };
    },
    components: { SignUpButton,
        WorkoutPreview,
        AddProgramButton,
    },
    computed: {
        getWorkouts() {
            return this.workouts;
        },
        getExercises() {
            return this.exercises;
        }
    },
    beforeMount() {
        var user = this.$store.getters.user;
        if(user){
            var wk = this;
            var userid = user.id;

            console.log('fetching user workouts...')
            fetch(`http://localhost:3000/users_workouts/userid/${userid}`)
                .then((response) => {
                console.log('fetched');
                    return response.json();
                })
                .then((myJson) => {
                    if(myJson.length == 0){
                        console.log('no workouts found')
                        return;
                    }
                    else{
                        var workoutslist = myJson.map((item) => item.WorkoutId);
                        console.log('workouts found')
                        console.log(workoutslist)
                        console.log('fetching workouts...')
                        var workoutsByCategory = {
                            'Weight Training': [],
                            'Calisthenics': [],
                            'Mixed': [],
                            };
                        workoutslist.forEach(element => {
                            fetch(`http://localhost:3000/workouts/custom/exercises/${element}`)
                            .then((response) => {
                            console.log('fetched');
                                return response.json();
                            })
                            .then((myJson) => {
                                console.log('workouts fetched')
                                workoutsByCategory[myJson.category].push(myJson);
                                
                            });
                            wk.workouts = workoutsByCategory;
                            
                        });
                        wk.isFetched = true;
                        wk.$store.commit('cworkouts', workoutsByCategory);
                    }
                });
        }
    }
}
</script>


<template>
    <div class="container" v-if="!user || home ">
        <section class="customProgram flex justify-center">
            <div class="flex-col justify-center  w-4/5 ">
                <h1 class="text-white text-6xl font-bold text-center mt-40">Create 
                    <span class="text-primary text-6xl font-bold text-center mt-40">your own</span>
                    program that fits
                    <span class="text-primary text-6xl font-bold text-center mt-40">your needs</span>
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
                <div class="flex justify-center" v-if="workouts.length==0">
                <p>You don't have any custom workout yet</p>
                </div>
                <div class="flex flex-col justify-center items-center" v-else>
                <WorkoutPreview v-if="isFetched" :workouts="getWorkouts"></WorkoutPreview>
                <AddProgramButton :sutext="'Add a Program'"></AddProgramButton>
                </div>
            </div>
    </div>
</template>


<style>
.container {
     transition: 0.4s;
     width: 100%;

 }</style>