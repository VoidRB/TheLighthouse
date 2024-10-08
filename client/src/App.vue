<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <main class="h-screen w-screen">
    <NavBar />
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
