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

export const toggleMenuAction = (toggle: boolean) => {
  return {
    type: "TOGGLE_MENU",
    payload: toggle,
  };
}