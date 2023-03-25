<script>
import {    
    Disclosure,
    DisclosureButton,
    DisclosurePanel,} from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import AddExerciseButton from './AddExerciseButton.vue';

export default {
    name: "ExerciseList",
    methods: {
    },
    data() {
        return {
            hiddenexercises : [],
            exercises : [],
            isFetched: false,
        }
    },
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        AddExerciseButton,

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
                        wk.hiddenexercises = myJson;
                        wk.isFetched = true;
                        console.log(wk.exercises)
                    }
                });
    },
    
}
</script>

<template>
    <div class="container">
    <div class="flex flex-col space-y-1 max-w-md mt-20" >
        <h1 class=" text-lg font-semibold leading-5 text-center mb-2">Exercises</h1>

    <div class=" max-w-md bg-secondary-light px-4 py-4 rounded-xl">

        <div class="flex flex-col space-y-1 ">
    <li v-for="exercise in exercises"
    class="w-full bg-secondary font-medium text-white rounded-md"
    :key="exercise.id">
        <Disclosure v-slot="{ open }" >
            <DisclosureButton class="flex w-full justify-between rounded-lg bg-secondary px-4 py-2">
                <h3 class="text-l font-bold leading-5 ">
                    {{ exercise.name }}
                </h3>
                <ChevronDownIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 text-white"
          />
            </DisclosureButton>
            <DisclosurePanel>
                <ul
                  class="mt-1 flex-col justify-start text-sm leading-4"
                >
                  <li class="w-full rounded-md bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.description }}</li>
                </ul>
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