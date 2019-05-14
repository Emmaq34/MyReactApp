import Data from "../AppBar/data";
const initState = {
  anchorEl:null,
  switching:true,
  listData: Data.navItems
}
export default (state=initState, action) => {
    switch (action.type) {
      case "showHideSidebar":
        return {
          ...state,
          switching: action.payload
        };
        
      case "openMenue":
        return {
          ...state,
          anchorEl: action.event.currentTarget
        };
        case "closeMenue":
        return {
          ...state,
          anchorEl: null
        };
       case "sidelist":
       return{
         ...state,
         [action.oneState]: !state[action.oneState]
       };
      default:
        return state;
    }
  };