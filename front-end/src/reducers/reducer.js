const reducer = (state= {pois: [], locations: [], places: [], loading: false}, action) =>{
    debugger

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
                return {...state, pois: state.pois.map(poi=> {
                    return (poi.id === action.poi.id) ? action.poi : poi
                }), loading: false}
        case 'DELETE_POI':
            const newPoiList = state.locations.filter(poi => poi.id!== action.locationId)
            return {...state, pois: newPoiList, loading: false}
        case 'REFRESH_LOCATIONS':
            return {...state, locations: action.locations, loading: false}
        case 'ADD_LOCATION':
            return {...state, locations: [...state.locations, action.location], loading: false}
        // case 'UPDATE_LOCATION':
        //     // not tested, not implemented
        //     idx = state.locations.findIndex(location=> location.id === action.location.id)
        //     return {...state, locations: [...state.locations, state.locations[idx] = action.location], loading: false}
        case 'DELETE_LOCATION':
            const newLocList = state.locations.filter(loc => loc.id!== action.locationId.toString())
            return {...state, locations: newLocList, loading: false}
        default:
            return state
    }
}

export default reducer