// , link to poi edit
// presentational
import React from 'react';
import PlaceSearchInput from '../components/PlaceSearchInput'
import PlacesCardDeck from './PlacesCardDeck';

const PlacesSearch = ({locationId}) =>{return(
    <div>
        <PlaceSearchInput locationId={locationId}/>
        <PlacesCardDeck locationId={locationId}/>
    </div>

)}

export default PlacesSearch