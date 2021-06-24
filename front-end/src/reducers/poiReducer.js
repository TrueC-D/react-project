const poiReducer = (state= {poi: [], loading: false}, action) =>{
    switch(action.type){
        case 'something':
            return 'something'
        default:
            return state
    }
}

export default poiReducer