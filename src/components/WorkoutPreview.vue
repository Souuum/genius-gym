<script>
import { TabGroup, 
    TabList,
    Tab, 
    TabPanels, 
    TabPanel ,     
    Disclosure,
    DisclosureButton,
    DisclosurePanel,} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import WorkoutDisclosure from './WorkoutDisclosure.vue'
export default {
    name: "WorkoutPreview",
    props: {
        workouts: Object,
    },
    methods: {
    },
    data() {
        return {
            Exercises : [],
            isFetched: false,
        }
    },
    components: {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        WorkoutDisclosure,
    },    
    mounted() {
    },
    beforeMount() {
        var wk = this;
        console.log('fetching exercises...')
        console.log(this.workouts);
        

    },
    computed: {
        getExercise(e) {
            return e;
        },
    },
    
}
</script>

<template>
    <div class="w-full max-w-md px-2 py-16 sm:px-0 flex-col justify-center">
        <TabGroup :defaultIndex="1">
        <TabList class="flex space-x-1 rounded-xl p-1">
        <Tab class="flex space-x-1 rounded-xl p-1"
        v-for="category in Object.keys(workouts)"
        as="template"
        :key="category"
        >
        <button          
        :class="[
                'w-full rounded-lg py-2.5 text-lg font-semibold leading-5 text-primary',
                'ring-secondary-light ring-opacity-60 ring-offset-2 ring-offset-primary focus:bg-secondary-light focus:text-primary focus:outline-none  ',
                'text-white hover:bg-secondary-light hover:text-primary',
              ]">{{category}}</button>
        </Tab>
        </TabList>
        <TabPanels class="mt-2">
        </TabPanels>
        <TabPanel
        v-for="(posts, idx) in Object.values(workouts)"
        :key="{idx}"
        :class="[
              'rounded-xl bg-secondary-light p-3',
              'ring-secondary-light ring-opacity-60 focus:outline-none',
            ]"
        >
        <ul>
        <li
        v-for="post in posts"
        :key="post.id"
        class="relative rounded-md p-1 text-primary"
        >
        <!-- <WorkoutDisclosure
        v-for="exercise in post.exercises"
        :key="exercise.id"
        :post="getExercise(exercise)"></WorkoutDisclosure> -->
        <Disclosure v-slot="{ open }">
            <DisclosureButton class="flex w-full justify-between rounded-lg bg-secondary px-4 
        py-2 text-left text-sm font-medium focus:outline-none">
        <h3 class="text-l font-bold leading-5 ">
        {{ post.name }}
        </h3>
        <p class="font-medium text-white">{{ post.description }}</p>
                <ChevronDownIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-8 w-8 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel
        v-for="exercise in post.Exercises"
        :key="exercise.id"
         class=" pt-1 text-m font-medium text-white">
            <Disclosure v-slot="{open}" >
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
                  <li class="w-full rounded-t-lg bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.description }}</li>
                  <li class="w-full bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.Workout_Exercises.nbReps + ' reps' }}</li>
                  <li class="w-full rounded-b-lg bg-secondary-lighter px-4 py-2 font-medium text-white">{{ exercise.Workout_Exercises.nbSets + ' sets' }}</li>
                </ul>
            </DisclosurePanel>
            </Disclosure>
        </DisclosurePanel>
        </Disclosure>


        </li>

        </ul>
        </TabPanel>
        </TabGroup>
    </div>
</template>