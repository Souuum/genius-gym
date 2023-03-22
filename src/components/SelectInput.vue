<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const category = [
  { name: 'Beginner' },
  { name: 'Casual' },
  { name: 'Advanced' },
  { name: 'Pro' },
]
const selectedCat = ref(category[0])
</script>


<template>
    <div class="top-1 w-60">
    <label class="text-white">What kind of athlete are you ?</label>
      <Listbox v-model="selectedCat">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-secondary py-2 pl-3 pr-10 text-left text-white shadow-md focus:outline-none sm:text-sm"
          >
            <span class="block truncate">{{ selectedCat.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
  
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary py-1 text-base shadow-lg focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="c in category"
                :key="c.name"
                :value="c"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-secondary-lighter text-primary' : 'text-white',
                    'relative cursor-default select-none py-2 pl-10 pr-4 z-10',
                  ]"
                  class="bg-secondary"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ c.name }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </template>
  



  