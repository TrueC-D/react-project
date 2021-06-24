
// API client id & secret not secure becuase they will be embedded in the build, saving in .env for now as this app isn't public.  The link below describes issue in more detail:
// https://create-react-app.dev/docs/adding-custom-environment-variables/

export const fetchPlaces=(locationName, searchTerm) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PLACES'})
        fetch(`https://api.foursquare.com/v2/venues/explore?near=${locationName}&query=${searchTerm}&client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}`).then(
            response => response.json()).then(data => {
                dispatch({type: 'ADD_PLACES', places: [data.response.groups[0].items] })
            })
    }
}

export const saveLocation=(locationName, startVisit, endVisit) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_LOCATION'})
        fetch('url here', {method: 'POST', headers: {'Content-Type':'application/json', body: JSON.stringify({ 
            name: locationName,
            start_visit: startVisit,
            end_visit: endVisit
        })}}).then(response => response.json()).then(responseJSON => {dispatch({type: 'ADD_LOCATION', location: responseJSON})})
    }
}

export const savePoi = (poiName, category, votes, notes, street, city, state, zip, location_id) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_POI'})
        fetch('url here', {method: 'POST', headers: {'Content-Type':'application/json', body: JSON.stringify({ 
            name: poiName,
            category: category, 
            votes: votes, 
            notes: notes, 
            street: street, 
            city: city, 
            state: state, 
            zip: zip, 
            location_id: location_id
        })}}).then(response => response.json()).then(responseJSON => {dispatch({type: 'ADD_POI', poi: responseJSON})})
    }
}


// I don't want to have to resubmit all arguments each time. Is the following update request the only way?

// export const updatePoi = (poiName, category, votes, notes, street, city, state, zip, location_id) => {
//     return (dispatch) =>{
//         dispatch({type: 'UPDATE_POI'})
//         fetch('url here', {method: 'PATCH', headers: {'Content-Type':'application/json', body: JSON.stringify({ 
//             name: poiName,
//             category: category, 
//             votes: votes, 
//             notes: notes, 
//             street: street, 
//             city: city, 
//             state: state, 
//             zip: zip, 
//             location_id: location_id
//         })}}).then(response => response.json()).then(responseJSON => {dispatch({type: 'UPDATE_POI', poi: responseJSON})})

//     }
// }
