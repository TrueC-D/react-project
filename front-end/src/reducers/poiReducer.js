const poiReducer = (state= {pois: [], loading: false}, action) =>{
    let idx = state.pois.findIndex(poi=> poi.id === action.payload.id)

    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'REFRESH_POIS':
            return {...state, pois: action.payload}
        case 'ADD_POI':
            return {...state, pois: [...state.pois, action.payload]}
        case 'UPDATE_POI':
            return {...state, pois: [...state.pois, ...state.pois[idx] = action.payload]}
            // {...state.poi[idx], action.payload} -> should return this instead for ..state.pois[idx]=
        case 'DELETE_POI':
            return {...state, pois: [...state.slice(0, idx), ...state.slice(idx + 1)]}
        default:
            return state
    }
}

export default poiReducer