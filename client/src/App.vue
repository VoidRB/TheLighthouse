<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <main class="h-screen w-screen">
    <NavBar class="relative pb-11 md:pb-0" />
    <RouterView />
  </main>
</template>
