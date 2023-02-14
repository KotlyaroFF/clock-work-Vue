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
export type IVariant = { [K in Variant]: string };

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
    [K in Color]: string;
  };
};
