

const placesReducer = (state= {places: [], loading: false}, action) =>{
    switch(action.type){
        case 'LOADING_PLACES':
            return {...state, loading: true}
        case 'REFRESH_PLACES':
            return {...state, places: action.payload}
        default:
            return state
    }
}

export default placesReducer