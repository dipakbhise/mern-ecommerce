import { combineReducers } from "redux";
import shopReducer from "./Shopping/shopping-reducer"


const combineReducer = combineReducers({
    shop : shopReducer
})

export default combineReducer;