<script setup lang="ts">
import { ShareIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import ShareModal from "@/components/ShareModal.vue";
const openModal = ref<boolean>(false);
const closeModal = () => {
  openModal.value = false;
};
</script>

<template>
  <button
    @click="openModal = true"
    class="text-2xl hover:text-gray-800 text-gray-100 my-auto flex"
  >
    <span class="text-gray-800">workClock</span>
    <span class="text-xl self-end ml-0.5">.app</span>
    <share-icon class="w-3 h-3" />
  </button>
  <share-modal :open="openModal" @close="closeModal" />
</template>
