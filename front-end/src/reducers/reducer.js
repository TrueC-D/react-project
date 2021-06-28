const reducer = (state= {pois: [], locations: [], places: [], loading: false}, action) =>{
    let idx
    debugger

    switch(action.type){
        case 'LOADING':
            // this works and has been implemented
            return {...state, loading: true}
        case 'REFRESH_PLACES':
            // not tested, not implemented
            return {...state, places: action.places, loading: false}
        case 'REFRESH_POIS':
                // not tested, not implemented
            return {...state, pois: action.pois, loading: false}
        case 'ADD_POI':
                // not tested, not implemented
            return {...state, pois: [...state.pois, action.poi], loading: false}
        case 'UPDATE_POI':
                // not tested, not implemented
            idx = state.pois.findIndex(poi=> poi.id === action.poi.id)
            return {...state, pois: [...state.pois, state.pois[idx] = action.poi], loading: false}
        case 'DELETE_POI':
                // not tested, not implemented
            idx = state.pois.findIndex(poi=> poi.id === action.poi.id)
            return {...state, pois: [...state.pois.slice(0, idx), ...state.pois.slice(idx + 1)], loading: false}
        case 'REFRESH_LOCATIONS':
             // this works and has been implemented
            return {...state, locations: action.locations, loading: false}
        case 'ADD_LOCATION':
            // this works and has been implemented
            return {...state, locations: [...state.locations, action.location], loading: false}
        case 'UPDATE_LOCATION':
            // not tested, not implemented
            idx = state.locations.findIndex(location=> location.id === action.location.id)
            return {...state, locations: [...state.locations, state.locations[idx] = action.location], loading: false}
        case 'DELETE_LOCATION':
            // this works and has been implemented
            const newLocList = state.locations.filter(loc => loc.id!== action.locationId.toString())
            return {...state, locations: newLocList, loading: false}
            // idx = state.locations.findIndex(location=> location.id === action.locationId)
            // return {...state, locations: [...state.locations.slice(0, idx), ...state.locations.slice(idx + 1)], loading: false}
        default:
            return state
    }
}

export default reducer