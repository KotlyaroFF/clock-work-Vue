<script setup lang="ts">
import LogoComponent from "./LogoComponent.vue";
import DropdownComponent from "@/components/UI/DropdownComponent.vue";
import type { MenuItemType } from "../UI/DropdownComponent.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
const selectItem = (id: string): void => {
  console.log("select", id);
};

const menuItems: Array<MenuItemType> = [
  { title: "FAQ", id: "FAQ".toLowerCase() },
  { title: "Feedback", id: "Feedback".toLowerCase() },
];
</script>
<template>
  <div
    class="flex justify-between flex-wrap bg-blue-600 shadow-2xl items-center px-4 py-2"
  >
    <logo-component class="py-2" />
    <div class="flex gap-4">
      <dropdown-component
        @selectItem="selectItem"
        :items="menuItems"
        :icon="Bars3Icon"
      />
    </div>
  </div>
</template>
