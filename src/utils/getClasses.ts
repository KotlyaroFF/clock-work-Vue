import type { Variant, Size, Color } from "@/types/types";
import { palette } from "@/assets/assets";
import * as componentImport from "../assets/index";
import { ref } from "vue";

interface GetClassesProps {
  component: string;
  variant: Variant;
  size: Size;
  disabled: boolean;
  color: Color;
  icon: boolean;
  loading: boolean;
}
export interface GetClassesResult {
  iconClasses: string[];
  titleClasses: string[];
  buttonClasses: string[];
}
type IGetClasses = (props: GetClassesProps) => GetClassesResult;

const getClasses: IGetClasses = ({
  color,
  component,
  variant,
  size,
  disabled,
  icon,
  loading,
}) => {
  // @ts-ignore
  const iconSize = componentImport[`${component}IconSize`];
  // @ts-ignore
  const titleSize = componentImport[`${component}TitleSize`];

  const refDisabled = ref(disabled || loading);

  const buttonClasses: string[] = [];
  const iconClasses: string[] = [];
  const titleClasses: string[] = [];

  buttonClasses.push(
    refDisabled.value ? palette[variant].disabled : palette[variant][color]
  );

  iconClasses.push(iconSize[size]);
  titleClasses.push(
    icon
      ? titleSize[size]
      : titleSize[size].filter(
          (element: string) => !element.includes("ml" || "mr")
        )
  );

  console.log(buttonClasses);
  return {
    iconClasses,
    titleClasses,
    buttonClasses,
  };
};

export default getClasses;
