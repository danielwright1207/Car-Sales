export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOTAL = "TOTAL";
export const addNewFeature = (feature) => {
  return { type: ADD, payload: feature };
};
export const removeNewFeature = (feature) => {
  return { type: REMOVE, payload: feature };
};
// export const newTotal = (feature) => {
//   return { type: TOTAL, payload: feature };
// };
