import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const locationLinks = props.locations.map((location, key) => <NavLink className={'loc-link'} key={key} to={`/locations/${location.id}`}>{' '}{location.attributes.name}</NavLink>)
    return(
            <div className="navbar">
                <NavLink to='/'>About</NavLink>
                <NavLink to='/locations'>Locations</NavLink>
                {locationLinks}
            </div>
    )
}

export default NavBar