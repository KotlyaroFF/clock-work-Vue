import type { Variant, Size, Color } from "@/types/types";
import { palette } from "@/assets/assets";

interface GetClassesProps {
  component: string;
  variant: Variant;
  size: Size;
  disabled?: boolean;
  color: Color;
}

const getClasses = async ({
  color,
  component,
  variant,
  size,
  disabled,
}: GetClassesProps) => {
  const Import = await import(`../assets/${component}.ts`);
  const buttonClasses: string[] = [];
  const iconClasses: string[] = [];
  const titleClasses: string[] = [];

  const iconSize = Import[`${component}IconSize`];
  const titleSize = Import[`${component}TitleSize`];

  buttonClasses.push(palette[variant][color]);
  console.log(buttonClasses);
  return {
    iconClasses,
    titleClasses,
    buttonClasses,
  };
};

export default getClasses;
