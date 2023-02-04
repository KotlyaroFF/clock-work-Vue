import type { IColor } from "@/types/types";
import { Color, Variant } from "@/types/types";

export const palette: IColor = {
  [Variant.default]: {
    [Color.primary]: "bg-amber-400 text-gray-800",
    [Color.secondary]: "",
    [Color.error]: "",
    [Color.success]: "",
    [Color.warning]: "",
  },
  [Variant.text]: {
    [Color.primary]: "bg-inherit text-gray-100",
    [Color.secondary]: "",
    [Color.error]: "",
    [Color.success]: "",
    [Color.warning]: "",
  },
  [Variant.outline]: {
    [Color.primary]: "bg-amber-400 text-gray-800",
    [Color.secondary]: "",
    [Color.error]: "",
    [Color.success]: "",
    [Color.warning]: "",
  },
};
