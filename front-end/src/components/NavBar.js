import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const locationLinks = props.locations.map((location, key) => <NavLink key={key} to={`location/${location.id}`}>{location.name}</NavLink>)
    return(
        <div className="navbar">
            <NavLink to='/'>Location Home</NavLink>
            {locationLinks}
        </div>
    )
}

export default NavBar