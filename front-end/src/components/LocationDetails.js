import React from 'react';

const LocationDetails = ({thisLocation}) =>{
    return(<div>
        <h2>{thisLocation.name.toUpperCase()}</h2>
        <p>Arrival: {thisLocation.start_visit}</p>
        <p>Departure: {thisLocation.end_visit}</p>
    </div>)
}

export default LocationDetails