import React from 'react';
import CardButtons from '../components/CardButtons'

const Card = ({item, type}) =>{
    // need to inherit props listed above
    <div>
        <image src={item.icon}></image>
                {/* icon -> not sure if it will load.  if it does then would like to add to model, saving may be restricted */}
        <h2>{item.name} - Votes: {item.votes}</h2>
        <CardButtons type={type} item={item}/>
        <p>Category: {item.category}</p>
        <p>Address: {`${item.street}`}</p>
        <p>{` ${item.city}, ${item.state} ${item.zip}`}</p>
        {/* may want to reformat this */}
        <p>Notes: {item.notes}</p>
    </div>

}

export default Card