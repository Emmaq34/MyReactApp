const initState = {
  anchorEl:null,
  switching:true
}
export default (state=initState, action) => {
    switch (action.type) {
      case "showHideSidebar":
        return {
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
       
      default:
        return state;
    }
  };