<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

export interface InputProps {
  inputAttributes?: InputHTMLAttributes;
}
withDefaults(defineProps<InputProps>(), {
  inputAttributes: () => ({}),
});
</script>
<template>
  <input v-bind="inputAttributes" />
</template>
