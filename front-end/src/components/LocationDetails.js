// , link to poi edit
// presentational
import React from 'react';

const LocationDetails = ({name, startVisit, endVisit}) =>{
    // need to inherit props listed above from location
    <div>
        <h2>{name}</h2>
        <p>Arrival: {startVisit}</p>
        <p>Departure: {endVisit}</p>
    </div>
}