<script setup lang="ts">
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import MainComponent from "@/components/Main/MainComponent.vue";
import AlertsWrapper from "@/components/AlertsWrapper.vue";
</script>

<template>
  <header-component class="w-full" />

  <main-component class="h-full" />
  <alerts-wrapper />
</template>

<style>
@import "./style.css";
</style>
