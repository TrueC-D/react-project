// , link to poi edit
// presentational
import React from 'react';
import PlaceSearchInput from '../components/PlaceSearchInput'
import PlacesCardDeck from './PlacesCardDeck';

const PlacesSearch = ({locationId}) =>{

    // need to inherit props listed above
    <div>
        <PlaceSearchInput locationId={locationId}/>
        <PlacesCardDeck locationId={locationId}/>
        {/* icon -> not sure if it will load.  if it does then would like to add to model, saving may be restricted */}
        {/* name */}
        {/* category */}
        {/* street */}
        {/* city */}
        {/* state */}
        {/* zip */}

        {/* notes */}
        {/* votes */}
    </div>

}

export default PlacesSearch