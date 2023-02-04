<script setup lang="ts">
import { store } from "@/store/store";
import { ShareIcon } from "@heroicons/vue/20/solid";

const url = "http://localhost:5173";
const copyUrl = () => {
  console.log(url);
  navigator.clipboard.writeText(url);
  store.alert = { isOpen: true, text: "Copied", type: "success" };
  setTimeout(() => {
    store.alert = { isOpen: false };
  }, 3000);
};
</script>

<template>
  <button variant="text" @click="copyUrl">
    <article class="text-2xl hover:text-gray-800 text-gray-100 my-auto flex">
      <span class="text-gray-800">workClock</span>
      <span class="text-xl self-end ml-0.5">.app</span>
      <share-icon class="w-3 h-3" />
    </article>
  </button>
</template>
