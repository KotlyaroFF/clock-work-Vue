import type { Variant, Size, Color } from "@/types/themeTypes";
import { palette } from "@/assets/assets";
import * as componentImport from "../assets/index";
import { ref } from "vue";

interface GetClassesProps {
  component: string;
  variant: Variant;
  size?: Size;
  disabled?: boolean;
  color: Color;
  isIcon?: boolean;
  loading?: boolean;
}
export interface GetClassesResult {
  iconClasses: string[];
  titleClasses: string[];
  componentClasses: string[];
}
type IGetClasses = (props: GetClassesProps) => GetClassesResult;

const getClasses: IGetClasses = ({
  color,
  component,
  variant,
  size,
  disabled,
  isIcon,
  loading,
}) => {
  // @ts-ignore
  const icon = componentImport[`${component}Icon`];
  // @ts-ignore
  const title = componentImport[`${component}Title`];

  const refDisabled = ref(disabled || loading);

  const componentClasses: string[] = [];
  const iconClasses: string[] = [];
  const titleClasses: string[] = [];
  componentClasses.push(
    refDisabled.value ? palette[variant].disabled : palette[variant][color]
  );
  icon.size && iconClasses.push(icon.size[size]);
  icon[color] && iconClasses.push(icon[color].classes[variant]);
  title?.size &&
    titleClasses.push(
      isIcon
        ? title.size[size]
        : title.size[size]
            .split(" ")
            .filter((element: string) => !element.includes("ml" || "mr"))
    );

  return {
    iconClasses,
    titleClasses,
    componentClasses,
  };
};

export default getClasses;
