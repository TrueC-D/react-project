const BASE_URL = "http://localhost:3000"

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

export const myLocations = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_LOCATIONS'})
        fetch(`${BASE_URL}/locations/`).then(response => response.json()).then(locationData => dispatch({type: 'ADD_LOCATIONS', locations: [locationData]}))
        // response data needs to be checked
    }
}

export const myPois = (locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_POIS'})
        fetch(`${BASE_URL}/locations/${locationId}/pois`).then(response => response.json()).then(poiData => dispatch({type: 'ADD_POIS', pois: [poiData]}))
        // response data needs to be checked
    }
}

export const saveLocation=(locationName, startVisit, endVisit) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_LOCATION'})
        fetch(`${BASE_URL}/locations`, {method: 'POST', headers: {'Content-Type':'application/json', body: JSON.stringify({ 
            name: locationName,
            start_visit: startVisit,
            end_visit: endVisit
        })}}).then(response => response.json()).then(responseJSON => {dispatch({type: 'ADD_LOCATION', location: responseJSON})})
        // response data needs to be checked
    }
}

// The following post request does not work, why? it returns an empty {}  these links may have more info, followed the reddit one partially but need to read more
// https://www.reddit.com/r/rails/comments/hzf4q2/is_strong_params_blocking_headers/
// https://github.com/matthew-andrews/isomorphic-fetch/issues/34
// https://stackoverflow.com/questions/21053653/actioncontrollerroutingerror-no-route-matches-post-locations-new

// fetch(`${BASE_URL}/locations`, {method: 'POST', headers: {'Content-Type':'application/json', body: JSON.stringify({ location: {
//     name: locationName,
//     start_visit: startVisit,
//     end_visit: endVisit}
// })}}).then(response => response.json()).then(res => {console.log(res)})


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

export const savePoi = (poiName, category, votes, notes, street, city, state, zip, location_id) => {
    return (dispatch) => {
        dispatch({type: 'SAVE_POI'})
        fetch(`${BASE_URL}/pois`, {method: 'POST', headers: {'Content-Type':'application/json', body: JSON.stringify({ 
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
