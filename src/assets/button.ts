import type { ISize } from "@/types/themeTypes";
import { Size } from "@/types/themeTypes";
interface Icon {
  size: ISize;
}
interface ITitle {
  size: ISize;
}
export const buttonIcon: Icon = {
  size: {
    [Size.sm]: ["w-4 h-4"],
    [Size.default]: ["w-6 h-6"],
    [Size.lg]: ["w-8 h-8"],
  },
};
export const buttonTitle: ITitle = {
  size: {
    [Size.sm]: ["text-sm", "ml-1.5"],
    [Size.default]: ["text-lg", "ml-2"],
    [Size.lg]: ["text-3xl", "ml-3"],
  },
};
