<script>
import SignUpButton from '../components/SignUpButton.vue';
import ExerciseList from '../components/ExerciseList.vue';
import ExerciseComboBox from '../components/ExerciseComboBox.vue';
import Button from '../components/Button.vue';
import AddExerciseButton from '../components/AddExerciseButton.vue';
import TextInput from '../components/TextInput.vue';
import CategoryComboBox from '../components/CategoryComboBox.vue';

export default{
    name: "CustomProgramView",
    data() {
        var user = this.$store.getters.user;
        var workout = this.$store.getters.selectedWorkout;
        var workoutName = workout.name;
        var workoutDescription = workout.description;
        var workoutId = workout.id;
        var exercises = workout.Exercises;
        var category = workout.category;
        return {
            user,
            isFetched: false,
            exercises : [],
            selectedExercise: exercises,
            selectedCategory: category,
            workoutName,
            workoutDescription,
            workoutId,

        };
    },
    components: { SignUpButton,
                ExerciseList, 
                Button, 
                ExerciseComboBox, 
                AddExerciseButton, 
                TextInput,
                CategoryComboBox,
             },
    computed: {
        getWorkouts() {
            return this.workouts;
        },
        getExercises() {
            return this.$store.getters.exercises;
        },
        checkSelected() {
            return this.$store.getters.selectedExercise;
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
                        //default value for sets and reps
                        myJson.forEach(element => {
                            element.sets = 3;
                            element.reps = 10;
                        });
                        wk.$store.commit('exercises', myJson);
                        wk.exercises = myJson;
                        wk.isFetched = true;
                        console.log(wk.exercises)
                        this.$store.commit('selectedExercise',myJson[0] );   
                    }
                });

    },
  methods: {
    handleSelectionChange(value) {
        console.log('selection changed')
      console.log(value)
      this.selectedExercise = value;
    },
    handleCategoryChange(value) {
        console.log('category changed')
      console.log(value)
      this.selectedCategory = value;
    },
    addExercise(exercise) {
        console.log('adding exercise')
        if(exercise===null){

            console.log('no exercise selected => default choice')
            exercise = this.exercises[0].name;
        }
        this.$store.commit('selectedExercise', exercise);
        console.log(this.$store.getters.selectedExercise)
    },
    modifyWorkout() {
    console.log('creating workout')
    var wk = this;

  },
  sendModify(submitEvent) {
            const formData = new FormData(submitEvent.target);
            formData.append('userId', this.user.id);
            console.log('adding exercise')
            console.log(this.$store.getters.selectedExerciseList)
            let workout = {
                id: this.workoutId,
                name: formData.get('Workout name'),
                description: formData.get('description'),
                category: this.selectedCategory,
                isCustom: true,
            }
            let exerciseList = JSON.stringify(this.$store.getters.selectedExerciseList) ;
            console.log(exerciseList)
            formData.append('Workout', JSON.stringify(workout));
            formData.append('Exercise', exerciseList);
            const credentials = Object.fromEntries(formData);
            console.log(credentials)

            //calling api
            fetch('http://localhost:3000/workouts/custom/modify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log('workout modified');
                        alert('Workout modified successfully')
                        this.$router.push('/customProgram');
                    } else {
                        console.log('workout not created');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
     },
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
        <div class="flex flex-col">
                <h1 class="text-white text-6xl font-bold text-center mt-40">Modify
                    <span class="text-primary text-6xl font-bold text-center mt-40">your</span>
                    workout
                </h1>
                <form @submit.prevent="sendModify">
                <div class="flex flex-row justify-between">
                    <div class="mt-20">
                <h3 class="text-white text-l font-semibold leading-5 mb-2">Select an exercise to add to your workout</h3>
                <div class="flex flex-row ">
                    <ExerciseComboBox v-model="selectedExercise" @selection-change="handleSelectionChange" ></ExerciseComboBox>
                    <AddExerciseButton class="ml-4" @click.prevent="addExercise(selectedExercise)" ></AddExerciseButton>
                </div>
                </div>
                    <ExerciseList class="ml-40" :modify="true"></ExerciseList>
                    <!-- <p>Selected exercise: {{ selectedExercise }}</p> -->
                    <div class="flex flex-col justify-center items-center bg-secondary-light rounded-xl px-4 py-4 h-fit mt-24 mr-20">
                    <TextInput :type="'text'" :placeHolder="'Workout Name'" :value="workoutName" :name="'Workout name'"></TextInput>
                    <CategoryComboBox v-model="selectedCategory" @selection-change="handleCategoryChange" class="mt-4"></CategoryComboBox>
                    <TextInput :type="'desc'" :placeHolder="Description" :value="workoutDescription" :name="'description'" class="mt-32"></TextInput>
                    <Button :text="'Modify'"  
                    @click="$event => modifyWorkout($event)"
                class=" self-center mt-10 w-32 h-10 rounded-md bg-secondary hover:bg-primary duration-300 font-medium text-white">Modify</Button>
                    </div>
                </div>
            </form>

            </div>
    </div>
</template>


<style>
.container {
     transition: 0.4s;
     width: 100%;

 }</style>