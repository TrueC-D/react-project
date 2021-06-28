import React, {Component} from 'react'
import LocationCreate from '../components/LocationCreate'
import LocationDetails from '../components/LocationDetails'
import { removeLocation } from '../actions/actions'
import { connect } from 'react-redux'
// I want to render current locations - start visit & end visit,  create & delete locations


class Locations extends Component {

    handleClick = (event) => {
        let locationId = event.target.key
        this.props.removeLocation(locationId)
    }

    render(){
        console.log('Locations props', this.props)
        const locationData = this.props.locations.map(location => 
            <div>
                <LocationDetails location={location}/>
                <button key={location.id} onClick={this.handleClick}>X</button>
            </div>
        )
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