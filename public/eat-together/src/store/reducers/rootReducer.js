import restaurantReducer from "./restaurantReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurant: restaurantReducer
});

export default rootReducer;
