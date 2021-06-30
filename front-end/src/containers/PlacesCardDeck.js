import React, { Component } from 'react'
import Card from '../components/Card'
import {connect} from 'react-redux'

class PlacesCardDeck extends Component {
    handleLoading = (cards) => {
        if(!this.props.loading) {
            console.log('PlacesCardDeck handleLoading props:', this.props)
            return(
                <div className={'card-deck'}>
                    {cards}
                </div>
            )
        }
    }
   
    render(){
        console.log('PlacesCardDeck props', this.props)
        const cards = this.props.places.map(place=> <Card className={'card'} type={'place'} item={place}/>)
        return(<div>{this.handleLoading(cards)}</div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const places = state.places.filter(place => place.attributes.location_id === props.locationId)
    return{places, loading: state.loading}
}

export default connect(mapStateToProps)(PlacesCardDeck)