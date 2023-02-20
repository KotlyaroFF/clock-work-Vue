import type { IColor } from "@/types/themeTypes";
import { Color, Variant } from "@/types/themeTypes";

export const palette: IColor = {
  [Variant.default]: {
    [Color.primary]: "bg-amber-400 text-gray-800",
    [Color.secondary]: "",
    [Color.error]: "bg-red-300 border-2 border-red-300",
    [Color.success]: "bg-green-300 border-2 border-green-300",
    [Color.warning]: "bg-amber-200 border-2 border-amber-200",
    [Color.inform]: "bg-blue-300 border-2 border-blue-300",
    [Color.disabled]: "bg-gray-300 text-gray-400 disable:hover:opacity-80",
  },
  [Variant.text]: {
    [Color.primary]: "bg-inherit text-gray-900",
    [Color.secondary]: "",
    [Color.error]: "",
    [Color.success]: "",
    [Color.warning]: "",
    [Color.inform]: "",
    [Color.disabled]: "bg-gray-200 text-gray-400",
  },
  [Variant.outline]: {
    [Color.primary]: "bg-inherit border-2 border-gray-300 text-gray-800",
    [Color.secondary]: "",
    [Color.error]: "",
    [Color.success]: "bg-green-100 border-2 border-green-500",
    [Color.warning]: "",
    [Color.inform]: "",
    [Color.disabled]: "bg-gray-200 text-gray-400",
  },
};
