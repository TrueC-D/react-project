import React from 'react';
import CardButtons from '../components/CardButtons'

const Card = ({item, type}) =>{
    console.log('card component type', type)
    const {
        id,
        attributes: attr
    } = item


    const title = (type === 'poi') ? `${attr.name} - Votes: ${attr.votes}`: `${attr.name}`
    const newZip = (attr.zip === 0 || undefined) ? '[zip not found]' : attr.zip

    // if i develp the app further to include category & notes:
    
    // const poiFields = (type === 'poi') ? <div> 
    //     <p>Category: {attr.category}</p>
    //     <p>Notes: {attr.notes}</p>
    // </div>: null


    return(<div className={'card'} id={`card-${id}`}>
        <img src={attr.icon_url} alt={`${attr.name} Icon`}/>
        <h3>{title}</h3>
        <CardButtons type={type} item={item}/>
        {/* {poiFields} */}
        <p>Address: {`${attr.street}`}</p>
        <p>{` ${attr.city}, ${attr.state} ${newZip}`}</p>
      
        
    </div>)

}

export default Card
