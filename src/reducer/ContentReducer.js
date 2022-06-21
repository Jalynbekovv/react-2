import {types} from "../types";

const initialState = {
    content: ""
}

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_CONTENT:
            return{...state, content: action.payload}
        case types.CLEAR_CONTENT:
            return{...state, content: initialState.payload}
        default:
            return state
    }
}