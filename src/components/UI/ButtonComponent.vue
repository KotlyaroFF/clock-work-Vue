<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import { toRefs } from "vue";
import { Color, Size, Variant } from "@/types/types";
import {
  buttonIconSize,
  buttonTitleSize,
  buttonVariants,
} from "@/assets/button";
import getClasses from "@/utils/getClasses";

export interface ButtonProps {
  title?: string;
  buttonAttributes?: ButtonHTMLAttributes;
  icon?: string;
  size?: Size;
  disabled?: boolean;
  variant?: Variant;
  color?: Color;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  buttonAttributes: () => ({}),
  size: Size.default,
  variant: Variant.default,
  color: Color.primary,
});

const { title, size, icon, disabled, variant, color } = toRefs(props);

const titleClass: string = `${buttonTitleSize[size.value]} ${
  icon?.value ? "" : "!ml-0"
}`;
const buttonClasses: string[] = [
  "py-1.5 flex w-full items-center hover:opacity-80 shadow-sm justify-center focus:opacity-70",
];
buttonClasses.push(title?.value ? "rounded-lg px-4" : `rounded-3xl px-2`);
buttonClasses.push(buttonVariants[variant.value]);
const preparedTitle =
  title?.value !== undefined &&
  title.value.charAt(0).toUpperCase() + title.value.slice(1);
let classes = await getClasses({
  component: "button",
  size: size.value,
  variant: variant.value,
  disabled: disabled?.value,
  color: color.value,
});

console.log(classes.buttonClasses.concat(buttonClasses).join(" "));
</script>

<template>
  <button
    v-bind="buttonAttributes"
    :class="classes.buttonClasses.concat(buttonClasses).join(' ')"
  >
    <component v-if="icon" :class="buttonIconSize[size]" :is="icon" />
    <span :class="titleClass" v-if="title">{{ preparedTitle }}</span>
  </button>
</template>
