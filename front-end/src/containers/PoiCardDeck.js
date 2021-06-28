import React, { Component } from 'react'
import PoiCard from '../components/PoiCard'

class PoiCardDeck extends Component {
   
    render(){
        const cards = this.props.pois.map(poi=> <PoiCard poi={poi}/>)
        return(
            <div className={'card-deck'}>
                {cards}
            </div>

        )
    }
}

export default PoiCardDeck