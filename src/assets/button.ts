import type { ISize, IVariant } from "@/types/types";
import { Size, Variant } from "@/types/types";

export const buttonIconSize: ISize = {
  [Size.sm]: "w-4 h-4",
  [Size.default]: "w-6 h-6",
  [Size.lg]: "w-8 h-8",
};
export const buttonTitleSize: ISize = {
  [Size.sm]: "text-sm ml-1.5",
  [Size.default]: "text-lg ml-2",
  [Size.lg]: "text-3xl ml-3",
};
export const buttonVariants: IVariant = {
  [Variant.text]: "",
  [Variant.default]: "",
  [Variant.outline]: "",
};
