
const BASE_URL = "http://localhost:3001"

// IMPORTANT DEVELOPMENT NOTE:

// // API client id & secret not secure becuase they will be embedded in the build, saving in .env for now as this app isn't public.  The link below describes issue in more detail:
// // https://create-react-app.dev/docs/adding-custom-environment-variables/

// EXTERNAL GET REQUEST:
 
export const fetchPlaces=(locationName, locationId, searchTerm, date) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`https://api.foursquare.com/v2/venues/explore?near=${locationName}&query=${searchTerm}&client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&v=${date}`).then(
            response => response.json()).then(data => {
                let places = data.response.groups[0].items.map(thisPlace => {
                    console.log('original venue',thisPlace)
                    const{venue:{
                        id, name, 
                        // categories: {icon: {prefix, suffix} ={prefix: 'undefined', suffix: 'undefined'},} = {icon: 'no icon'}, 
                        categories: [{icon: {prefix, suffix}}],
                        location: {address, city, state, postalCode, country} = {address: 'undefined'}
                        
                    }}= thisPlace

                    let iconUrl = prefix+'bg_88'+suffix
                    // 88  is the size of the icon. "bg" loads the background color so the image can be seen on a white page.  There are 4 sizes available -> 32, 44, 64, 88 
                    // see this link:
                    // https://stackoverflow.com/questions/24377797/get-the-icon-of-a-foursquare-category-from-its-id

                    let item ={id: id, attributes: {icon_url: iconUrl, name: name, street: address, city: city, state: state, zip: postalCode, country: country, location_id: locationId }}
                    console.log('destructured fetchPlaces response', item)

                    return item
                })
                console.log('places:', places) 
                dispatch({type: 'REFRESH_PLACES', places: places  })
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
        fetch(`${BASE_URL}/locations/${locationId}/pois`).then(response => response.json()).then(poiData => dispatch({type: 'REFRESH_POIS', pois: poiData.data}))
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


// export const updateLocation = (startVisit, endVisit, locationId) => {
//     return (dispatch) =>{
//         dispatch({type: 'LOADING'})
//         const bodyData = {location: {start_visit: startVisit, end_visit: endVisit}}
//         // just changed body data to remove location id since this shouldn't be updated in patch. Have to check params in back-end and make sure it doesn't cause errors
//         fetch(`${BASE_URL}/locations/${locationId}`, {
//             method: 'PATCH',
//             headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
//             body: JSON.stringify(bodyData)
//         }).then(response => response.json()).then(responseJSON => {dispatch({type: 'UPDATE_LOCATION', location: responseJSON})})

//     }
// }

export const removeLocation= (locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${BASE_URL}/locations/${locationId}`, {method: 'DELETE'}).then(res => res.json()).then(item => {dispatch({type: 'DELETE_LOCATION', locationId: item.id})})
    }
}

// POI ACTIONS:

export const savePoi = (icon, poiName, street, city, state, country, zip, locationId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const bodyData = {poi: {
            icon_url : icon,
            name: poiName,
            street: street,
            city: city,
            country: country,
            state: state,
            zip: zip,
            votes: 0,
            location_id: locationId
        }};
        fetch(`${BASE_URL}/locations/${locationId}/pois`, {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(bodyData)
        }).then(response => response.json()).then(responseJSON => {console.log('savePoi responseJSON.DATA', responseJSON.data); dispatch({type: 'ADD_POI', poi: responseJSON.data})})
    }
}


// export const updatePoi = (votes, notes, poiId) => {
//     return (dispatch) =>{
//         dispatch({type: 'LOADING'})
//         const bodyData = {poi: {id: poiId, votes: votes, notes: notes}}
//         fetch('url here', {
//             method: 'PATCH',
//             headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
//             body: JSON.stringify(bodyData)
//         }).then(response => response.json()).then(responseJSON => {dispatch({type: 'UPDATE_POI', poi: responseJSON})})
//     }
// }

export const changePoiVote = (votes, locationId, poiId) =>{
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const bodyData = {poi: {votes: votes}}
        fetch(`${BASE_URL}/locations/${locationId}/pois/${poiId}`, {
            method: 'PATCH',
            headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
            body: JSON.stringify(bodyData)
        }).then(res => res.json()).then(item => {dispatch({type: 'UPDATE_POI', poi: item.data})})
    }
    
}

export const removePoi = (locationId, poiId) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(`${BASE_URL}/locations/${locationId}/pois/${poiId}`, {method: 'DELETE'}).then(res => res.json()).then(item => {dispatch({type: 'DELETE_POI', poiId: item.id})})
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
