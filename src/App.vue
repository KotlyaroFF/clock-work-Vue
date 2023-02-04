<script setup lang="ts">
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import MainComponent from "./components/Main/MainComponent.vue";
import { toRefs } from "vue";
import { store } from "./store/store";

const { alert } = toRefs(store);
</script>

<template>
  <header-component class="w-full" />

  <main-component class="h-full" />
  <!--      <v-alert-->
  <!--        v-if="alert.isOpen"-->
  <!--        :type="alert.type"-->
  <!--        :text="alert.text"-->
  <!--        class="m-4"-->
  <!--        position="fixed"-->
  <!--        location="bottom right"-->
  <!--      />-->
</template>

<style>
@import "./style.css";
</style>
