<script setup>
import { Typer } from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const callsToAction = [
  "take control of your mental",
  "Rise Above all the stress",
  "Its in your hands.",
  "The Lighthouse.",
];
</script>
<template>
  <div class="flex h-5/6 w-full flex-col-reverse sm:flex-row">
    <section class="items flex w-full items-center justify-center sm:w-1/2">
      <img src="../assets/Brain.svg" alt="Brain" class="h-5/6 w-full" />
    </section>
    <hr class="h-0 w-4/5 self-center border-2 border-black sm:h-5/6 sm:w-0" />
    <section class="flex w-full items-center justify-center sm:w-1/2">
      <Typer
        class="pb-4 pl-0 text-center text-5xl font-bold capitalize sm:pb-6 sm:pl-6 sm:text-left md:text-7xl lg:text-7xl"
        :text="callsToAction"
        erase-style="clear"
        caret-animation="smooth"
      ></Typer>
    </section>
  </div>
</template>
