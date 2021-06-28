
const locationReducer = (state= {locations: [], loading: false}, action) =>{
    
    let idx = state.locations.findIndex(location=> location.id === action.payload.id)

    switch(action.type){
        case 'LOADING':
            return {...state, locations: [...state.locations], loading: true}
        case 'REFRESH_LOCATIONS':
            return {...state, locations: action.locatons}
        case 'ADD_LOCATION':
            return {...state, locations: [...state.locations, action.payload]}
        case 'UPDATE_LOCATION':
            return {...state, locations: [...state.locations, ...state.locations[idx] = action.payload]}
        case 'DELETE_LOCATION':
            return {...state, locations: [...state.slice(0, idx), ...state.slice(idx + 1)]}
        default:
            return state
    }
}

export default locationReducer