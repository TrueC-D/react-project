import React, {Component} from 'react'
import Location from './Location'
// I want to render current locations - start visit & end visit,  create & delete locations


class Locations extends Component {

    render(){
        const locationData = this.props.locations.map(location => <Location location={location} removeLocation={this.props.removeLocation} />)
        return(
            <div>
                <LocationCreate />
                {locationData}
            </div>
        )

    
    }
}
export default Locations