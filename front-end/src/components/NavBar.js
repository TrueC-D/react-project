import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const locationLinks = props.locations.map((location, key) => <NavLink className={'loc-link'} key={key} to={`/location/${location.id}`}>{' '}{location.attributes.name}</NavLink>)
    return(
            <div className="navbar">
                <NavLink to='/'>Location Home</NavLink>
                {locationLinks}
            </div>
    )
}

export default NavBar