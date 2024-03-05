const initial = {
  togglemenu: false
}

export const toggleMenu = (state = initial, action: any) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        toggle: action.payload
      }
    default:
      return state;
  }
} 