<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import ButtonsComponent from "@/components/UI/ButtonComponent.vue";
import type { ButtonHTMLAttributes } from "vue";
import { Size } from "@/types/types";

export interface MenuItemType {
  title: string;
  id: string;
}

interface DropdownProps {
  items: Array<MenuItemType>;
  title?: string;
  buttonAttributes?: ButtonHTMLAttributes;
  icon?: string;
  size?: Size;
}

defineProps<DropdownProps>();

const emits = defineEmits<{ (selectItem: "selectItem", id: string): void }>();
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton tabindex="-1">
        <buttons-component
          :icon="icon"
          :title="title"
          :size="size"
          :button-attribute="buttonAttributes"
          :with-icon="withIcon"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div
          class="py-1"
          v-for="item in items"
          :key="item.id"
          :value="item.title"
        >
          <MenuItem v-slot="{ active }">
            <button
              @click="emits('selectItem', item.id)"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 w-full text-start py-2 text-sm',
              ]"
            >
              {{ item.title }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
