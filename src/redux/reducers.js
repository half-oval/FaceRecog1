import { SET_CURRENT_IMAGE } from "./actions";

const initialState = {
    image : '',
}

function imageReducer( state = initialState, action){
    switch(action.type){
        case SET_CURRENT_IMAGE:
            return {...state, image:action.payload}
        default:
            return state
     }
}

export default imageReducer;