<script setup lang="ts">
import LogoComponent from "./LogoComponent.vue";
import type { MenuItemType } from "../UI/UiDropdown.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
import UiDropdown from "@/components/UI/UiDropdown.vue";
import { ref } from "vue";
import FaqModal from "@/components/FaqModal.vue";
import FeedbackModal from "@/components/FeedbackModal.vue";

const openModal = ref<boolean>(false);
const selectedId = ref<string | null>(null);
const selectItem = (id: string): void => {
  selectedId.value = id;
  openModal.value = true;
};
const closeModal = () => {
  openModal.value = false;
  selectedId.value = null;
};

const menuItems: Array<MenuItemType> = [
  { title: "FAQ", id: "faq" },
  { title: "Feedback", id: "feedback" },
];
</script>
<template>
  <div
    class="flex justify-between flex-wrap bg-blue-600 shadow-2xl items-center px-4 py-2"
  >
    <logo-component class="py-2" />
    <div class="flex gap-4">
      <ui-dropdown
        @selectItem="selectItem"
        :items="menuItems"
        :icon="Bars3Icon"
      />
    </div>
    <faq-modal
      v-if="selectedId === 'faq'"
      @close="closeModal"
      :open="openModal"
    />
    <feedback-modal
      v-if="selectedId === 'feedback'"
      @close="closeModal"
      :open="openModal"
    />
  </div>
</template>
