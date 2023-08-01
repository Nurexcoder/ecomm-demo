import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: ProductReducer,
});

export default rootReducer;