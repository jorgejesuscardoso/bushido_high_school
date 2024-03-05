export const toggleMenuAction = (toggle: boolean) => {
  return {
    type: "TOGGLE_MENU",
    payload: toggle,
  };
}