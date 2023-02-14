import type { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue";

export enum Size {
  sm = "sm",
  default = "default",
  lg = "lg",
}
export type ISize = { [K in Size]: string | string[] };

export enum Variant {
  text = "text",
  default = "default",
  outline = "outline",
}
export enum Color {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  warning = "warning",
  disabled = "disabled",
}
export type IColor = {
  [T in Variant]: {
    [K in Color]: string | string[];
  };
};
export type IAlertColor = {
  [K in Color]: {
    icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
    classes: { [V in Variant]: string };
  };
};
