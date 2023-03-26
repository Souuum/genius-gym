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
    filteredCategories() {
      return this.query === ''
        ? this.categories
        : this.categories.filter((category) =>
            category.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(this.query.toLowerCase().replace(/\s+/g, ''))
          )
    },
  },
  data() {
    return {
      query: ref(''),
      categories: [
        { id: 1, name: 'Weight Training' },
        { id: 2, name: 'Calisthenic' },
        { id: 3, name: 'Mixed' },
      ],
      selected: ref("Weight Training"),

    }
  },
  methods: {
  handleSelectionChange(value) {
    this.$emit('selection-change', value);
  },
    onInput(selectedValue) {
      this.$emit('input', selectedValue);
    }
    },
    mounted() {
    this.$emit('input', this.selected.value);
  }
}
</script>


<template>
    <div class="w-72">
      <Combobox v-model="selected" @input="onInput">
        <div class="relative mt-1">
          <div
            class="relative w-full cursor-default overflow-hidden rounded-md bg-primary text-left shadow-md focus:outline-none sm:text-sm"
          >
            <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 leading-5 text-semibold text-white  bg-secondary"
              :displayValue="(category) => category"
              @change="{query = $event.target.value;
              handleSelectionChange(query)}"
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
                v-if="filteredCategories.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
              >
                Nothing found.
              </div>
  
              <ComboboxOption
                v-for="category in filteredCategories"
                as="template"
                :key="category.id"
                :value="category.name"
                v-slot="{ selected, active }"
                @click="handleSelectionChange(category.name)"
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
                    {{ category.name }}
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
  
