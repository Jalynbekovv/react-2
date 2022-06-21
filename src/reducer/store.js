import {combineReducers} from "redux"
import {contentReducer} from "./ContentReducer";



export const rootReducer = combineReducers({
    content: contentReducer
})