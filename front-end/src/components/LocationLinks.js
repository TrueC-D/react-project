import React from 'react'
import {Link} from 'react-router-dom'

const LocationLinks = (props) => {
    debugger
    return(
            <div className="location-links">
                <Link to={`${this.props.match}/search`}>Search Places</Link>
                <Link to={`${this.props.match}/poi`}>Points of Interest</Link>
            </div>
    )
}

export default LocationLinks