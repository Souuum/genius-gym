<script>

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { RouterLink } from 'vue-router';
  
  export default {
    name: 'CustomMenu',
    components: { Popover, PopoverButton, PopoverPanel, ChevronDownIcon, RouterLink },
    data () {
        var account = this.$store.state.user ? {"name" : "Account", "href" : "/account"} : { "name" : "Login", "href" : "/login"};
        return {
            routes : [
    {
      name: 'Home',

      href: '/',
    },
    {
      name: 'Workouts',
      href: '/workout',
    },
    {
      name: 'Custom Programs',
      href: '/customProgram',

    },
    account,
  ]
        }
    },
    methods: {
        observeStore() {
            this.$store.subscribe((mutation, state) => {
                if (mutation.type == "setUser") {
                    this.account = state.user ? {"route" : "/account", "name" : "Account"} : {"route" : "/login", "name" : "Login"};
                    console.log('changed');
                    console.log(this.account);
                }
            })
        }
    }
  }

</script>
  

<template>
    <div class="cmenu-container">
        <div class="fixed">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton
          :class="open ? '' : 'text-opacity-90'"
          class="group inline-flex items-center rounded-md bg-secondary-light px-3 py-2 text-base font-medium text-primary hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75"
        >
          <span>GeniusGym</span>
          <ChevronDownIcon
            :class="open ? '' : 'text-opacity-70'"
            class="ml-2 h-5 w-5 text-primary transition duration-150 ease-in-out group-hover:text-opacity-80"
            aria-hidden="true"
          />
        </PopoverButton>
  
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
            class="absolute  z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 "
          >
            <div
              class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="relative grid gap-8 bg-secondary-light p-7 lg:grid-cols-2">
              <RouterLink
                v-for="item in routes"
                :key="item.name"
                :to="item.href"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-secondary text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50"
                >{{ item.name }}</RouterLink>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    </div>
  </template>
  

<style>
.cmenu-container {
    display: none;
}

@media screen and (max-width: 800px) {
    .cmenu-container {
        top:10px;
        right: -70%;
        display: block;
    }
    
}
</style>