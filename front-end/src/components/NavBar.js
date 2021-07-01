import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const locationLinks = props.locations.map((location, key) => <NavLink className={'loc-link'} key={key} to={`/locations/${location.id}`}>{' '}{location.attributes.name.toLowerCase()}</NavLink>)
    return(
            <div className="navbar">
                <NavLink className={'link-main'} exact to='/'>About</NavLink>
                <NavLink className={'link-main'} exact to='/locations'>Locations</NavLink>
                {locationLinks}
            </div>
    )
}

export default NavBar