<script setup>
import { Typer } from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const callsToAction = [
  "take control",
  "Rise Above",
  "Guide The rest",
  "The Lighthouse.",
];
</script>
<template>
  <div class="flex h-5/6 w-full flex-col-reverse sm:flex-row">
    <section
      class="bg- flex w-full items-center justify-center drop-shadow-lg sm:w-1/2"
    >
      <img src="../assets/Brain.svg" alt="Brain" class="to h-5/6 w-full" />
    </section>
    <hr class="h-0 w-4/5 self-center border-2 border-black sm:h-5/6 sm:w-0" />
    <section class="mb-4 flex items-center justify-center sm:w-1/2">
      <Typer
        class="pl-0 text-center text-5xl font-bold capitalize sm:pl-6 sm:text-left md:text-7xl lg:text-7xl"
        :text="callsToAction"
        erase-style="clear"
        caret-animation="smooth"
      ></Typer>
    </section>
  </div>
</template>
