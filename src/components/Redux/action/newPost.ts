const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const newPostAction1 = () => {
  return {
    type: INCREMENT,
  };
}
export const newPostAction2 = () => {
  return {
    type: DECREMENT,
  };
}
