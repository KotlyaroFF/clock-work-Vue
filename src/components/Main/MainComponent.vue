<script>
import { defineComponent } from "vue";
import UiInput from "@/components/UI/UiInput.vue";

export default defineComponent({
  components: { UiInput },
});
</script>

<template>
  <div class="flex flex-col gap-3 bg-gray-100 px-8 py-4">
    <h1>Hallo World</h1>
    <ui-input />
  </div>
</template>
