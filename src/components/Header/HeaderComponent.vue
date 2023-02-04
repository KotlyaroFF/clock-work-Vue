<script setup lang="ts">
import LogoComponent from "./LogoComponent.vue";
import DropdownComponent from "@/components/UI/DropdownComponent.vue";
import type { MenuItemType } from "../UI/DropdownComponent.vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
import ButtonsComponent from "@/components/UI/ButtonComponent.vue";
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
    class="flex justify-between bg-blue-600 shadow-2xl items-center px-4 py-2"
  >
    <logo-component class="py-2" />
    <div class="flex gap-4">
      <buttons-component :icon="Bars3Icon" size="lg" />
      <buttons-component title="button" variant="text" />
      <dropdown-component
        @selectItem="selectItem"
        :items="menuItems"
        :icon="Bars3Icon"
        title="Button"
        size="lg"
      />
    </div>
  </div>
</template>
