<script setup>
import { ref } from "vue";
const searchInput = ref("");
</script>
<template>
  <div class="flex flex-col items-center justify-center drop-shadow-lg">
    <input
      type="text"
      class="mb-7 mt-10 w-1/3 rounded-md border-2 border-TLHGray p-4"
      placeholder="Which community are you looking for?"
      v-model="searchInput"
    />
    <h1 v-if="searchInput !== ''" class="p-5 ring-2 ring-TLHGray">
      {{ searchInput }}
    </h1>
    <h1 v-else class="">Enter a Search please</h1>
  </div>
</template>
