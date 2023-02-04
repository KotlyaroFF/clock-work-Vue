<script setup lang="ts">
import ButtonsComponent from "@/components/UI/ButtonComponent.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";

console.log("12");
</script>

<template>
  <div class="bg-gray-100 px-8 py-4">
    <h1>Hallo World</h1>
    <buttons-component size="lg" title="button" />
    <buttons-component :icon="Bars3Icon" variant="text" title="button" />
  </div>
</template>
