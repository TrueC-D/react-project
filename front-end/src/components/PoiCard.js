// , link to poi edit
// presentational
import React from 'react';

const PoiCard = ({icon, poiName, votes, category, street, city, state, zip, notes, upvotePoi, downvotePoi, removePoi}) =>{
    // need to inherit props listed above
    <div>
        <image src={icon}></image>
                {/* icon -> not sure if it will load.  if it does then would like to add to model, saving may be restricted */}
        <h2>{poiName}</h2>
        <p>Votes: {votes}</p>
        <button name={'upvotePoi'}>UpVote</button>
        <button name={'downvotePoi'}>DownVote</button>
        <p>Category: {category}</p>
        <p>Address: {`${street}, ${city}, ${state} ${zip}`}</p>
        <p>Notes: {notes}</p>
    </div>

}

export default PoiCard