const reducer = (state= {pois: [], locations: [], places: [], loading: false}, action) =>{
    let idx

    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'REFRESH_PLACES':
            return {...state, places: action.places, loading: false}
        case 'REFRESH_POIS':
            return {...state, pois: action.pois, loading: false}
        case 'ADD_POI':
            return {...state, pois: [...state.pois, action.poi], loading: false}
        case 'UPDATE_POI':
            idx = state.pois.findIndex(poi=> poi.id === action.poi.id)
            return {...state, pois: [...state.pois, state.pois[idx] = action.poi], loading: false}
        case 'DELETE_POI':
            idx = state.pois.findIndex(poi=> poi.id === action.poi.id)
            return {...state, pois: [...state.slice(0, idx), ...state.slice(idx + 1)], loading: false}
        case 'REFRESH_LOCATIONS':
            return {...state, locations: action.locatons, loading: false}
        case 'ADD_LOCATION':
            return {...state, locations: [...state.locations, action.location], loading: false}
        case 'UPDATE_LOCATION':
            idx = state.locations.findIndex(location=> location.id === action.location.id)
            return {...state, locations: [...state.locations, state.locations[idx] = action.location], loading: false}
        case 'DELETE_LOCATION':
            idx = state.locations.findIndex(location=> location.id === action.location.id)
            return {...state, locations: [...state.slice(0, idx), ...state.slice(idx + 1)], loading: false}
        default:
            return state
    }
}

export default reducer