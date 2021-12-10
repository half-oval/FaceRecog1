export const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE'

export const setCurrentImage = image => dispatch =>{
    dispatch({
        type: SET_CURRENT_IMAGE,
        payload: image,
    })
}
