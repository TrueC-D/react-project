import React, { Component } from 'react'
import Card from '../components/Card'
import {connect} from 'react-redux'
import {myPois} from '../actions/actions'

class PoiCardDeck extends Component {
    componentDidMount(){
        console.log('PoiCardDeck componentDidMount')
        this.props.myPois(this.props.locationId)
    }

    handleLoading = (cards) => {
        if(!this.props.loading) {
            console.log('PoiCardDeck handleLoading props:', this.props)
            return(
                <div className={'card-deck'}>
                    {cards}
                </div>
            )
        }
    }
    render(){
        console.log('PoiCardDeck props', this.props)
        const cards = this.props.pois.map(poi=> <Card key={poi.id} type={"poi"} item={poi}/>)
        return(
            <div>
                <h3 className={'card-deck-title'}>Points of Interest:</h3>
                {this.handleLoading(cards)}
            </div> 
        )
    }
}

const mapStateToProps = (state, props) => {
    const pois = state.pois.filter(poi => poi.attributes.location_id === parseInt(props.locationId, 10))
    return{pois, loading: state.loading}
}

export default connect(mapStateToProps,{myPois})(PoiCardDeck)