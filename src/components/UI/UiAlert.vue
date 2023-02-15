<script setup lang="ts">
import { toRefs, watchEffect, ref } from "vue";
import { Color, Variant } from "@/types/themeTypes";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import type { GetClassesResult } from "@/utils/getClasses";
import getClasses from "@/utils/getClasses";
import { alertIcon } from "@/assets/alert";

export interface AlertProps {
  title: string;
  text?: string;
  anotherText?: string;
  noneIcon?: boolean;
  variant?: Variant;
  color?: Color;
  closed?: boolean;
}
const props = withDefaults(defineProps<AlertProps>(), {
  variant: Variant.default,
  color: Color.inform,
  noneIcon: false,
});
const defaultClasses = ["p-4 shadow-lg z-20 rounded-lg"];
const { title, noneIcon, variant, color, text, anotherText } = toRefs(props);
let classes: GetClassesResult;
const icon = ref(alertIcon[color.value].icon);
watchEffect(() => {
  classes = getClasses({
    component: "alert",
    variant: variant.value,
    color: color.value,
    isIcon: !noneIcon.value,
  });
});

const defaultIconClasses = ["h-10 w-10 lg:h-16 lg:w-16 self-center"];
const defaultTitleClasses = ["text-2xl font-bold mb-1"];
</script>
<template>
  <section :class="defaultClasses.concat(classes.componentClasses).join(' ')">
    <div class="flex gap-2">
      <component
        :is="icon"
        :class="defaultIconClasses.concat(classes.iconClasses).join(' ')"
        v-if="!noneIcon"
      />
      <div class="flex flex-col gap-2 w-full">
        <div class="flex justify-between">
          <button v-if="closed" class="w-4 h-4 ml-2 self-center order-last">
            <component :is="XMarkIcon" class="hover:text-gray-600" />
          </button>
          <p :class="defaultTitleClasses.concat(classes.iconClasses.join(' '))">
            {{ title }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p>
            {{ text }}
          </p>
          <div class="flex justify-between items-center">
            <slot />
            <p class="text-sm text-gray-700 mr-2 min-w-max">
              {{ anotherText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
