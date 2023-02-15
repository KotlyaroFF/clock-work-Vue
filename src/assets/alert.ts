import { Color, Variant } from "@/types/themeTypes";
import type { IAlertColor } from "@/types/themeTypes";
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/20/solid";

export const alertIcon: IAlertColor = {
  [Color.error]: {
    icon: ExclamationCircleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-red-600",
      [Variant.text]: "",
    },
  },
  [Color.success]: {
    icon: CheckBadgeIcon,
    classes: {
      [Variant.outline]: "text-green-700",
      [Variant.default]: "",
      [Variant.text]: "",
    },
  },
  [Color.warning]: {
    icon: ExclamationTriangleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-amber-600",
      [Variant.text]: "",
    },
  },
  [Color.secondary]: {
    icon: InformationCircleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-blue-600",
      [Variant.text]: "",
    },
  },
  [Color.inform]: {
    icon: InformationCircleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-blue-600",
      [Variant.text]: "",
    },
  },
  [Color.primary]: {
    icon: InformationCircleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-blue-600",
      [Variant.text]: "",
    },
  },
  [Color.disabled]: {
    icon: InformationCircleIcon,
    classes: {
      [Variant.outline]: "",
      [Variant.default]: "text-blue-600",
      [Variant.text]: "",
    },
  },
};
