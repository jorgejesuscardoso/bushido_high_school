
type ToogleMenuType = {
  type: string;
  payload: boolean;
};

export const toggleMenu = (state = false, action: ToogleMenuType) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return action.payload;
    default:
      return state;
  }
}