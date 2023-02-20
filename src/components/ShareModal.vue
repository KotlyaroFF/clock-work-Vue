<script setup lang="ts">
import UiModal from "@/components/UI/UiModal.vue";
import UiButton from "@/components/UI/UiButton.vue";
import {
  InformationCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/20/solid";
import UiInput from "@/components/UI/UiInput.vue";
import { store } from "@/store/store";
import getUniqueId from "@/utils/getUniqueId";
const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ (close: "close"): void }>();

const url = "http://localhost:5173";
const copyUrl = () => {
  console.log(url);
  navigator.clipboard.writeText(url);
  store.alerts.push({
    id: getUniqueId(),
    props: {
      title: "Copied",
      color: "success",
      text: "Congratulation!",
    },
  });
};
</script>
<template>
  <ui-modal
    title="Share"
    :open="props.open"
    @close="emit('close')"
    :icon="InformationCircleIcon"
    size="3xl"
  >
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        You can copy link for share this application
      </p>
      <div class="flex">
        <ui-input :value="url" />
        <ui-button
          :icon="ClipboardDocumentIcon"
          class="w-max"
          @click="copyUrl"
        />
      </div>
    </div>
    <template #footer>
      <div
        class="bg-gray-50 px-4 py-3 flex flex-col items-end gap-3 sm:flex-row-reverse sm:px-6"
      >
        <ui-button
          color="error"
          title="Close"
          @click="emit('close')"
          class="w-max"
        />
      </div>
    </template>
  </ui-modal>
</template>
