<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { RouterLink } from "vue-router";

let menuState = true;
let menuIcon = "fa-bars";

const menuIconChange = () => {
  menuIcon = menuState ? "fa-times" : "fa-bars";
  menuState = !menuState;
};
</script>

<template>
  <div class="mr-3 flex flex-row items-center gap-0">
    <h1 class="hidden md:inline-block">
      Click here to navigate the platform<i
        class="fa fa-arrow-right ml-3 mr-3"
      ></i>
    </h1>

    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          @click="menuIconChange"
          class="inline-flex w-full justify-center rounded-full bg-white text-sm font-semibold text-gray-900 ring-2 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <i
            :class="['fa', menuIcon, 'text-xl', 'text-black', 'px-4', 'py-2']"
          ></i>
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <RouterLink
              to="/"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Home</RouterLink
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <RouterLink
              to="/ProHelp"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Professional Help</RouterLink
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <RouterLink
              to="/Communities"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Communities</RouterLink
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <RouterLink
              to="/Events"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Events</RouterLink
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <RouterLink
              to="/SignUp"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >Sign Up</RouterLink
            >
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
