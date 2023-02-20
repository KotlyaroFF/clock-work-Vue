import { reactive } from "vue";
// @ts-ignore
import type { AlertProps } from "@/components/UI/UiAlert.vue";
// @ts-ignore
import type { ButtonProps } from "@/components/UI/UiButton.vue";

interface IAlerts {
  id: string;
  props: AlertProps;
  button?: {
    props: ButtonProps;
  };
}

interface Store {
  alerts: Array<IAlerts>;
}

export const store: Store = reactive({
  alerts: [],
});
