<script setup lang="ts">
import { toRefs } from "vue";
import UiInput from "@/components/UI/UiInput.vue";
import UiButton from "@/components/UI/UiButton.vue";
import { store } from "@/store/store";
import getUniqueId from "@/utils/getUniqueId";

const { alerts } = toRefs(store);
const addAlert = () => {
  return alerts.value.push({
    id: getUniqueId(),
    props: {
      title: "Alert",
      color: "error",
      closed: true,
      text: "You are have error!",
    },
  });
};
</script>

<template>
  <div class="flex flex-col gap-3 bg-gray-100 px-8 py-4">
    <h1>Hallo World</h1>
    <ui-input />
    <ui-button title="add alert" @click="addAlert" />
  </div>
</template>
