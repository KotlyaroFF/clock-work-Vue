import { store } from "@/store/store";
import { toRefs } from "vue";

export type IGetUniqueId = () => string;
const getUniqueId: IGetUniqueId = () => {
  const { alerts } = toRefs(store);

  let uniqueId: number = Math.floor(Math.random() * 100000000);
  alerts.value.map((alert, i) => {
    if (alert.id === uniqueId.toString()) {
      return (uniqueId = uniqueId + i);
    }
  });
  return uniqueId.toString();
};

export default getUniqueId;
