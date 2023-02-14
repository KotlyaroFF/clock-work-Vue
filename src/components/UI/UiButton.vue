<script setup lang="ts">
import type {
  ButtonHTMLAttributes,
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "vue";
import { toRefs, watchEffect } from "vue";
import type { GetClassesResult } from "@/utils/getClasses";

import { Color, Size, Variant } from "@/types/themeTypes";
import getClasses from "@/utils/getClasses";
import UiSpinner from "@/components/UI/UiSpinner.vue";

export interface ButtonProps {
  title?: string;
  buttonAttributes?: ButtonHTMLAttributes;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps>;
  size?: Size;
  disabled?: boolean;
  variant?: Variant;
  color?: Color;
  loading?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  buttonAttributes: () => ({}),
  size: Size.default,
  variant: Variant.default,
  color: Color.primary,
  disabled: false,
  loading: false,
});

const { title, size, icon, disabled, variant, color, loading } = toRefs(props);

const defaultClasses: string[] = [
  "py-1.5 flex w-full items-center hover:opacity-80 relative shadow-sm justify-center ",
];
defaultClasses.push(title?.value ? "rounded-lg px-4" : `rounded-3xl px-2`);
const preparedTitle =
  title?.value !== undefined &&
  title.value.charAt(0).toUpperCase() + title.value.slice(1);
let classes: GetClassesResult;

watchEffect(() => {
  classes = getClasses({
    component: "button",
    size: size.value,
    variant: variant.value,
    disabled: disabled.value,
    color: color.value,
    isIcon: !!icon?.value,
    loading: loading.value,
  });
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    v-bind="buttonAttributes"
    :class="defaultClasses.concat(classes.componentClasses).join(' ')"
  >
    <component v-if="icon" :class="classes.iconClasses" :is="icon" />
    <span :class="classes.titleClasses" v-if="title">{{ preparedTitle }}</span>
    <ui-spinner
      v-if="loading"
      class="w-6 self-center absolute mx-auto text-gray-100 animate-spin fill-gray-700"
    />
  </button>
</template>
