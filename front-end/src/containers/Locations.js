import React, {Component} from 'react'
import LocationCreate from '../components/LocationCreate'
import LocationDetails from '../components/LocationDetails'
import { removeLocation } from '../actions/actions'
import { connect } from 'react-redux'
// I want to render current locations - start visit & end visit,  create & delete locations


class Locations extends Component {

    handleClick = (event) => {
        this.props.removeLocation(event.target.id)
    }

    render(){
        console.log('Locations props', this.props)
        const locationData = this.props.locations.map((location, key) => {
            return(
            <div className={'loc-list-item'} key={key}>
                <LocationDetails thisLocation={location.attributes}/>
                <button id={location.id} onClick={this.handleClick}>Delete</button>
            </div>)
        })
        return(
            <div>
                <LocationCreate />
                {locationData}
            </div>
        )

    
    }
}

const mapStateToProps = state => ({
    locations: state.locations
})

export default connect(mapStateToProps, {removeLocation})(Locations)