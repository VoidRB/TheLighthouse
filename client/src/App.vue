<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <main class="h-screen w-screen">
    <NavBar class="relative md:absolute" />
    <RouterView />
  </main>
</template>
