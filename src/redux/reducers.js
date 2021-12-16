import { SET_CURRENT_IMAGE, ADD_IMAGE } from "./actions";

const initialState = {
    image : '',
    addImage: true,
}

function imageReducer( state = initialState, action){
    switch(action.type){
        case SET_CURRENT_IMAGE:
            return {...state, image:action.payload}
        case ADD_IMAGE:
            return {...state, addImage:action.payload }
        default:
            return state
     }
}

export default imageReducer;