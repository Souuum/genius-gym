<script>
import {    
    Disclosure,
    DisclosureButton,
    DisclosurePanel,} from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import AddExerciseButton from './AddExerciseButton.vue';
import RemoveExerciseButton from './RemoveExerciseButton.vue';
import { mapGetters } from 'vuex';


export default {
    name: "ExerciseList",
    props: {
        modify : Boolean,
    },
    methods: {
        addExercise() {
    const selectedExerciseData = this.selectedExerciseData;
    if (selectedExerciseData) {
      const exerciseExists = this.exercises.some(exercise => exercise.id === selectedExerciseData.id);
      if (!exerciseExists) {
        this.exercises.push(selectedExerciseData);
        console.log('exercise added');
        //upadte the store
        this.$store.commit('selectedExerciseList', this.exercises);
        console.log(this.$store.getters.selectedExerciseList);
      } else {
        console.log('exercise already exists');
      }
    }
},
removeExercise(exercise) {
  const index = this.exercises.findIndex((e) => e.id === exercise.id);
  if (index !== -1) {
    console.log('exercise removed');
    this.exercises.splice(index, 1);
    console.log(this.exercises)
    if (this.selectedExerciseData && this.selectedExerciseData.id === exercise.id) {
      this.$store.commit('selectedExercise', null);
    }
  }
},
    },
    data() {

        if(this.modify){
            console.log('modify is true')
            console.log(this.$store.getters.selectedExerciseList)
            let workout = this.$store.getters.selectedWorkout;
            let cexercises = workout.Exercises
            cexercises.forEach(element => {
                element.sets = element.Workout_Exercises.nbSets
                element.reps = element.Workout_Exercises.nbReps
            });
            return {
                hiddenexercises : [],
                exercises : cexercises,
                isFetched: false,
                selectedExerciseName: [],
                selectedExercises: [],
            }
        }
        return {
            hiddenexercises : [],
            exercises : [],
            isFetched: false,
            selectedExerciseName: [],
            selectedExercises: [],
        }
    },
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        AddExerciseButton,
        RemoveExerciseButton,

    },mounted() {
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
                        //default value for sets and reps
                        myJson.forEach(element => {
                            element.sets = 3;
                            element.reps = 10;
                        });
                        wk.hiddenexercises = myJson;
                        wk.isFetched = true;
                        console.log(wk.hiddenexercises)
                    }
                });
    },computed: {
        getExercises() {
            return this.$store.getters.exercises;
        },
        ...mapGetters(['selectedExercise']),
        selectedExerciseData() { //Look for the corresponding exercise in the exercises array
            if(!this.selectedExercise){
                console.log('no exercise selected')
            }
        return this.hiddenexercises.find(
            (exercise) => exercise.name === this.$store.getters.selectedExercise
        )
        },
    },

    watch: {
  selectedExercise(newValue) {
    if (newValue) {
      this.addExercise();
    }
  }
}
}
</script>

<template>
    <div class="container" v-if="!modify">
    <div class="flex flex-col space-y-1 max-w-lg  mt-20" >
        <h1 class=" text-l font-semibold leading-5 text-center mb-2">Exercises</h1>

    <div class=" max-w-lg bg-secondary-light px-4 py-4 rounded-xl">

        <div class="flex flex-col space-y-1 ">
    <li v-for="exercise in exercises"
    class="w-full bg-secondary font-medium text-white rounded-md"
    :key="exercise.id">
        <Disclosure v-slot="{ open }" >
            <DisclosureButton class="flex flex-col items-center w-full justify-between rounded-lg bg-secondary px-4 py-2" @click.prevent>
            <div class="flex w-full justify-between items-center rounded-lg bg-secondary px-4 py-2" >
                <h3 class="text-l font-bold leading-5  w-24 ">
                    {{ exercise.name }}
                </h3>
                <div class="flex items-center space-x-1">
                    <label for="reps" class="text-sm font-semibold">Reps:</label>
                    <input required name="reps"  type="number" min="1" max="100" v-model.number="exercise.reps" class="w-12 border-gray-300 rounded-md text-sm bg-secondary-lighter text-white">
                </div>
                <div class="flex items-center space-x-1">
                    <label for="sets" class="text-sm font-semibold">Sets:</label>
                    <input required name="sets" type="number" min="1" max="10" v-model.number="exercise.sets" class="w-12 border-gray-300 rounded-md text-sm bg-secondary-lighter text-white">
                </div>
                <RemoveExerciseButton @remove-exercise="removeExercise(exercise)"/>

            </div>    
                <div>
            <ul
                  class="mt-1 flex-col justify-start text-sm leading-4"
                >
                  <li class="w-full rounded-md bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.description }}</li>
                </ul>
                </div>

            </DisclosureButton>
            <DisclosurePanel>
            </DisclosurePanel>
      </Disclosure> 
    </li>
    </div>
    </div>
</div>
</div>
<div class="container" v-else>
    <div class="flex flex-col space-y-1 max-w-lg  mt-20" >
        <h1 class=" text-l font-semibold leading-5 text-center mb-2">Exercises</h1>

    <div class=" max-w-lg bg-secondary-light px-4 py-4 rounded-xl">

        <div class="flex flex-col space-y-1 ">
    <li v-for="exercise in exercises"
    class="w-full bg-secondary font-medium text-white rounded-md"
    :key="exercise.id">
        <Disclosure v-slot="{ open }" >
            <DisclosureButton class="flex flex-col items-center w-full justify-between rounded-lg bg-secondary px-4 py-2" @click.prevent>
            <div class="flex w-full justify-between items-center rounded-lg bg-secondary px-4 py-2" >
                <h3 class="text-l font-bold leading-5  w-24 ">
                    {{ exercise.name }}
                </h3>
                <div class="flex items-center space-x-1">
                    <label for="reps" class="text-sm font-semibold">Reps:</label>
                    <input required name="reps"  type="number" min="1" max="100" v-model.number="exercise.reps" class="w-12 border-gray-300 rounded-md text-sm bg-secondary-lighter text-white">
                </div>
                <div class="flex items-center space-x-1">
                    <label for="sets" class="text-sm font-semibold">Sets:</label>
                    <input required name="sets" type="number" min="1" max="10" v-model.number="exercise.sets" class="w-12 border-gray-300 rounded-md text-sm bg-secondary-lighter text-white">
                </div>
                <RemoveExerciseButton @remove-exercise="removeExercise(exercise)"/>

            </div>    
                <div>
            <ul
                  class="mt-1 flex-col justify-start text-sm leading-4"
                >
                  <li class="w-full rounded-md bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.description }}</li>
                </ul>
                </div>

            </DisclosureButton>
            <DisclosurePanel>
            </DisclosurePanel>
      </Disclosure> 
    </li>
    </div>
    </div>
</div>
</div>
</template>

<style scoped>
li{
    list-style-type: none;  
}
.ion {
  fill: var(--white);
}
.ion:hover{
    fill: var(--primary);
}
</style>