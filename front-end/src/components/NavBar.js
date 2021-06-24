import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const locationLinks = props.locations.map(location => <NavLink key={location.id} to={`location/:locationId`}>{location.name}</NavLink>)
    return(
        <div className="navbar">
            <NavLink to='/'>Location Home</NavLink>
            {locationLinks}
        </div>
    )
}

export default NavBar