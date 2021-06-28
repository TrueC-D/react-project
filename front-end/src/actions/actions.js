const BASE_URL = "http://localhost:3001"

// IMPORTANT DEVELOPMENT NOTE:

// // API client id & secret not secure becuase they will be embedded in the build, saving in .env for now as this app isn't public.  The link below describes issue in more detail:
// // https://create-react-app.dev/docs/adding-custom-environment-variables/

// EXTERNAL GET REQUEST:

export const fetchPlaces=(locationName, searchTerm) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`https://api.foursquare.com/v2/venues/explore?near=${locationName}&query=${searchTerm}&client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}`).then(
            response => response.json()).then(data => {
                dispatch({type: 'REFRESH_PLACES', places: [data.response.groups[0].items] })
            })
    }
}

// INTERNAL GET REQUESTS:

export const myLocations = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
fetch(`${BASE_URL}/locations`).then(response => response.json()).then(locationData => {dispatch({type: 'REFRESH_LOCATIONS', locations: locationData.data})})
        // response data needs to be checked
    }
}

export const myPois = (locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${BASE_URL}/locations/${locationId}/pois`).then(response => response.json()).then(poiData => dispatch({type: 'REFRESH_POIS', pois: [poiData]}))
        // response data needs to be checked
    }
}

// LOCATION ACTIONS:

export const saveLocation=({locName, startDatetime, endDatetime}) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})

        const bodyData = {location: {name: locName, start_visit: startDatetime, end_visit: endDatetime} }

        fetch(`${BASE_URL}/locations`, {
            method: 'POST', 
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'}, 
            body: JSON.stringify(bodyData)}).then(response => response.json()).then(
                res => {dispatch({type:'ADD_LOCATION', location: res.data})}
            )
    }
}


export const updateLocation = (startVisit, endVisit, locationId) => {
    return (dispatch) =>{
        dispatch({type: 'LOADING'})
        const bodyData = {location: {start_visit: startVisit, end_visit: endVisit}}
        // just changed body data to remove location id since this shouldn't be updated in patch. Have to check params in back-end and make sure it doesn't cause errors
        fetch(`${BASE_URL}/locations/${locationId}`, {
            method: 'PATCH',
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(bodyData)
        }).then(response => response.json()).then(responseJSON => {dispatch({type: 'UPDATE_LOCATION', location: responseJSON})})

    }
}

export const removeLocation= (locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${BASE_URL}/locations/${locationId}`, {method: 'DELETE'}).then(res => res.json()).then(item => {dispatch({type: 'DELETE_LOCATION', locationId: item.id})})
    }
}

// POI ACTIONS:

export const savePoi = (poiName, category, votes, notes, street, city, state, zip, locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const bodyData = {poi: {
            name: poiName,
            category: category,
            votes: votes,
            notes: notes,
            street: street,
            city: city,
            state: state,
            zip: zip,
            location_id: locationId
        }}
        fetch(`${BASE_URL}/locations/locationIdpois`, {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(bodyData)
        }).then(response => response.json()).then(responseJSON => {dispatch({type: 'ADD_POI', poi: responseJSON})})
    }
}


export const updatePoi = (votes, notes, poiId) => {
    return (dispatch) =>{
        dispatch({type: 'LOADING'})
        const bodyData = {poi: {id: poiId, votes: votes, notes: notes}}
        fetch('url here', {
            method: 'PATCH',
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(bodyData)
        }).then(response => response.json()).then(responseJSON => {dispatch({type: 'UPDATE_POI', poi: responseJSON})})

    }
}

// POTENTIALLY SHORTEN REQUESTS WITH THESE FUNCS:

// export const saveLocation = (locationName, startVisit, endVisit) => {
//     return (dispatch) => {
//         dispatch({type: 'SAVE_LOCATION'})
//         const thisUrl = `${BASE_URL}/locations`
//         const requestType = 'POST'
//         const bodyData = {location:{name: locationName, start_visit: startVisit, end_visit: endVisit}}
//         const dispatchData = {type: 'ADD_LOCATION', location: res.data}
//         fetchRequest()
//     }
// }

// // not putting parameters because I will only place this in methods that where parameters are already declared.
// function fetchRequest(){
//     fetch(thisUrl, {
//         method: requestType, 
//         headers: {'Accept': 'application/json','Content-Type':'application/json'}, 
//         body: JSON.stringify(bodyData)}).then(response => response.json()).then(
//             res => {dispatch(dispatchData)}
//         )
// }


// RESOURCES FOR FIXING STRONG_PARAMS FETCH REQUESTS:

// https://www.reddit.com/r/rails/comments/hzf4q2/is_strong_params_blocking_headers/
// https://github.com/matthew-andrews/isomorphic-fetch/issues/34
// https://stackoverflow.com/questions/21053653/actioncontrollerroutingerror-no-route-matches-post-locations-new

// ENTERING JAVASCRIPT NEW DATE:

// javascript new Date()
// new Date(1995, 11, 17, 3, 24, 0);
// is the same as:
// new Date('December 17, 1995 03:24:00');

// converting javascript to ruby:

// In Javascript:

// THE FOLLOWING CONVERTS FROM CURRENT TIME ZONE TO UTC & ACCOUNTS FOR DAYLIGHT SAVINGS

// // new Date().toISOString()
// // => "2021-03-05T18:45:18.661Z"
// In Ruby:

// // Time.current.utc.iso8601(3)
// // # => "2021-03-05T18:59:26.577Z"

// see this blog:
// https://blog.konnor.site/rails/differences-between-javascript-and-rails-timezones
