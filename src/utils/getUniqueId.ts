export type IGetUniqueId = (arr?: [{ id: string }]) => string;
const getUniqueId: IGetUniqueId = (arr) => {
  let uniqueId: number = Math.floor(Math.random() * 100000000);
  arr?.map((alert, i) => {
    if (alert.id === uniqueId.toString()) {
      return (uniqueId = uniqueId + i);
    }
  });
  console.log(uniqueId);
  return uniqueId.toString();
};

export default getUniqueId;
