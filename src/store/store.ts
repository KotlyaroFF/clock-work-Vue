import { reactive } from "vue";
// @ts-ignore
import type { AlertProps } from "@/components/UI/UiAlert.vue";
// @ts-ignore
import type { ButtonProps } from "@/components/UI/UiButton.vue";
import UiButton from "@/components/UI/UiButton.vue";

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
  alerts: [
    {
      id: "",
      props: {
        title: "Success",
        color: "success",
        variant: "outline",
        text: "Congratulation!",
        closed: true,
        anotherText: "Like as",
      },
      button: {
        item: UiButton,
        props: {
          title: "roll back",
        },
      },
    },
    {
      id: "",
      props: {
        title: "Warning",
        color: "warning",
        text: "Same think wrong!",
        closed: true,
      },
    },
    {
      id: "",
      props: {
        title: "Information",
        color: "inform",
        text: "We use a cookie",
        closed: true,
      },
    },
  ],
});
