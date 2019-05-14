import { createStore } from "redux";
import showHideReducer from "./Reducers/showHideReducer";
function configureStore(state = { switching: true , opening: null }) {
  return createStore(showHideReducer,state);
}
export default configureStore;