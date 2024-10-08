<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const toHome = () => {
  router.push({
    name: "HomeView",
  });
};
</script>
<template>
  <div
    class="flex cursor-pointer flex-row items-center drop-shadow-md"
    @click="toHome"
  >
    <img src="/Lighthouse.svg" alt="TheLighthouse" class="size-10" />
    <h3 class="text-2xl font-bold text-TLHOrange">
      <span class="text-TLHGray">The</span>Lighthouse
    </h3>
  </div>
</template>
