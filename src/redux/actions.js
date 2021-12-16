export const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE'
export const ADD_IMAGE = 'ADD_IMAGE'

export const setCurrentImage = image => dispatch =>{
    dispatch({
        type: SET_CURRENT_IMAGE,
        payload: image,
    })
}

export const addImage = addImage => dispatch =>{
    dispatch({
        type: ADD_IMAGE,
        payload: addImage,
    })
}
