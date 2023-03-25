<script>
import { ref, computed } from 'vue'
import { mapState } from 'vuex'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    CheckIcon,
    ChevronUpDownIcon,
  },
  computed: {
    ...mapState({
      exercises: (state) => state.exercises,
    }),
    filteredExercises() {
      return this.query === ''
        ? this.exercises
        : this.exercises.filter((exercise) =>
            exercise.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(this.query.toLowerCase().replace(/\s+/g, ''))
          )
    },
  },
  data() {
    return {
      selected: ref(null),
      query: ref(''),
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchExercises')
  },
}
</script>

  


<template>
    <div class="w-72">
      <Combobox v-model="selected">
        <div class="relative mt-1">
          <div
            class="relative w-full cursor-default overflow-hidden rounded-md bg-primary text-left shadow-md focus:outline-none sm:text-sm"
          >
            <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 leading-5 text-semibold text-white  bg-secondary-light"
              :displayValue="(exercise) => exercise"
              @change="query = $event.target.value"
            />
            <ComboboxButton
              class="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>
          <TransitionRoot
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            @after-leave="query = ''"
          >
            <ComboboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary-lighter py-1 text-white shadow-lg  sm:text-sm"
            >
              <div
                v-if="filteredExercises.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
              >
                Nothing found.
              </div>
  
              <ComboboxOption
                v-for="exercise in filteredExercises"
                as="template"
                :key="exercise.id"
                :value="exercise.name"
                v-slot="{ selected, active }"
              >
                <li
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                  :class="{
                    'bg-secondary text-white text-semibold': active,
                    'text-secondary': !active,
                  }"
                >
                  <span
                    class="block truncate"
                    :class="{ 'font-medium': selected, 'font-semibold': !selected }"
                  >
                    {{ exercise.name }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold"
                    :class="{ 'text-white': active, 'text-secondary': !active }"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </Combobox>
    </div>
  </template>
