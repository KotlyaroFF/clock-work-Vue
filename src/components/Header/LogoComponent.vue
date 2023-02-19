<script setup lang="ts">
import { store } from "@/store/store";
import { ShareIcon } from "@heroicons/vue/20/solid";
import getUniqueId from "@/utils/getUniqueId";

const url = "http://localhost:5173";
const copyUrl = () => {
  console.log(url);
  navigator.clipboard.writeText(url);
  store.alerts.push({
    id: getUniqueId(),
    props: {
      title: "Copied",
      color: "success",
      text: "Congratulation!",
    },
  });
};
</script>

<template>
  <button
    @click="copyUrl"
    class="text-2xl hover:text-gray-800 text-gray-100 my-auto flex"
  >
    <span class="text-gray-800">workClock</span>
    <span class="text-xl self-end ml-0.5">.app</span>
    <share-icon class="w-3 h-3" />
  </button>
</template>
