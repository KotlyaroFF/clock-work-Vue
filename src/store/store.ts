import { reactive } from "vue";


interface Store {
  alert: {
    isOpen: boolean;
    text?: string;
    type?: "error" | "success" | "warning" | "info";
  };
}

export const store: Store = reactive({
  alert: { isOpen: false },
});
