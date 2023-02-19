<script setup lang="ts">
import { ref, toRefs, watchEffect } from "vue";
import { store } from "@/store/store";
import UiButton from "@/components/UI/UiButton.vue";
import UiAlert from "@/components/UI/UiAlert.vue";
import { alertSettings } from "@/assets/alert";

const { alerts } = toRefs(store);
const prepareAlerts = ref(alerts);
const closeAlert = (id: string) => {
  prepareAlerts.value = alerts.value.filter((alert) => alert.id !== id);
};
watchEffect(() => {
  prepareAlerts.value.map((alert) => {
    if (!alert.props.closed) {
      setTimeout(() => {
        closeAlert(alert.id);
      }, alertSettings.timeout);
    }
  });
});
</script>
<template>
  <div class="bottom-0 p-2 right-0 fixed flex flex-col gap-2 lg:w-1/5">
    <div
      v-if="prepareAlerts.length > 2"
      class="text-sm absolute z-30 bottom-3 right-4"
    >
      3 in {{ prepareAlerts.length }}
    </div>
    <div v-if="prepareAlerts.length > 2" class="self-end">
      <ui-button
        title="Close all"
        size="sm"
        @click="() => (prepareAlerts = [])"
      />
    </div>
    <ui-alert
      @close-alert="closeAlert"
      v-for="alert in prepareAlerts.slice(-3)"
      :key="alert.id"
      :id="alert.id"
      :title="alert.props.title"
      :text="alert.props.text"
      :variant="alert.props.variant"
      :color="alert.props.color"
      :another-text="alert.props.anotherText"
      :none-icon="alert.props.noneIcon"
      :closed="alert.props.closed"
      ><component
        v-if="alert.button"
        :is="UiButton"
        :title="alert.button.props.title"
        :icon="alert.button.props.icon"
        :size="alert.button.props.size"
        :variant="alert.button.props.variant"
        :button-attribute="alert.button.props.buttonAttributes"
        :disabled="alert.button.props.disabled"
        :loading="alert.button.props.loading"
    /></ui-alert>
  </div>
</template>
