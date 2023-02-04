<script setup lang="ts">
import type { MenuItem } from "./HeaderComponent.vue";

interface MenuProps {
  menuItems: Array<MenuItem>;
}

const props = defineProps<MenuProps>();
</script>

<template>
  <v-menu>
    <template>
      <v-btn icon="mdi-menu" v-bind="props"></v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in props.menuItems"
        :key="item.id"
        :value="item.title"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
