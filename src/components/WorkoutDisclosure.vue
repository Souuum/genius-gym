<script>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Disclosure,DisclosureButton,DisclosurePanel } from '@headlessui/vue'
export default {
    name: "WorkoutDisclosure",
    props: {
        post: Object,
    },
    components: {
        ChevronDownIcon,
        Disclosure,
        DisclosureButton,
    },
    data() {
        return {
            exercises: [],
            isFetched: false,
        }
    },
    beforeMount(){
        if (this.props.post == null) {
            console.log('null');
            this.exercises = {
                name: 'loading',
                description: 'loading',}
        } else{
            console.log('not null');
        }
    },
    mounted() {
        console.log(this.$props.post);
        this.isFetched = true;
    },

}
</script>


<template>
        <Disclosure v-slot="{ open }">
            <DisclosureButton class="flex w-full justify-between rounded-lg bg-purple-100 px-4 
        py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none 
        focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
        <h3 class="text-sm font-medium leading-5 ">
        post.name 
        </h3>
        <ul
                  class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                >
                  <li>{{ post.description }}</li>
                </ul>
                <ChevronDownIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-8 w-8 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel
        v-for="exercise in post.Exercises"
        :key="exercise.id"
         class="px-4 pt-4 pb-2 text-sm text-gray-500">
          {{ exercise.name }}
        </DisclosurePanel>
        </Disclosure>
</template>



<style></style>