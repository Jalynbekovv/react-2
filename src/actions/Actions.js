import {types} from "../types";


export const contentChangeAction = (content) =>{
    return{
        type: types.CREATE_CONTENT,
        payload: content
    }
}

export const clearContentAction = () =>{
    return{
        type: types.CLEAR_CONTENT
    }
}