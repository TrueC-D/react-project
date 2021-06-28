// , link to poi edit
// presentational
import React from 'react';

const LocationDetails = ({thisLocation}) =>{
    // need to inherit props listed above from location
    return(<div>
        <h2>{thisLocation.name}</h2>
        <p>Arrival: {thisLocation.start_visit}</p>
        <p>Departure: {thisLocation.end_visit}</p>
    </div>)
}

export default LocationDetails