<script setup lang="ts">
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import MainComponent from "./components/Main/MainComponent.vue";
import { toRefs } from "vue";
import { store } from "./store/store";
import UiAlert from "@/components/UI/UiAlert.vue";
import UiButton from "@/components/UI/UiButton.vue";

const { alert } = toRefs(store);
console.log(alert);
</script>

<template>
  <header-component class="w-full" />

  <main-component class="h-full" />
  <div class="bottom-0 p-2 right-0 fixed flex flex-col gap-2 lg:w-1/5">
    <ui-alert title="Alert" color="error" closed text="You are have error!" />
    <ui-alert
      title="Success"
      color="success"
      variant="outline"
      text="Congratulation!"
      another-text="Like as"
    >
      <ui-button title="Roll back" class="w-max order-last" />
    </ui-alert>
    <ui-alert title="Warning" color="warning" text="Same think wrong!" />
    <ui-alert title="Information" color="inform" text="We use a cookie" />
  </div>
</template>

<style>
@import "./style.css";
</style>
