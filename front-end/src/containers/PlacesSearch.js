// , link to poi edit
// presentational
import React from 'react';
import PlaceSearchInput from '../components/PlaceSearchInput'
import PlacesCardDeck from './PlacesCardDeck';

const PlacesSearch = ({locationName, locationId}) =>{return(
    <div>
        <PlaceSearchInput locationName={locationName} locationId={locationId}/>
        <PlacesCardDeck locationId={locationId}/>
    </div>

)}

export default PlacesSearch