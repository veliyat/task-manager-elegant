import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
        <nav className="mt-2">
            <NavLink to="/login" className="btn btn-link" activeClassName="btn btn-primary text-white">
                Login
            </NavLink>
            <NavLink to="/register" className="btn btn-link" activeClassName="btn btn-primary text-white">
                Register
            </NavLink>
        </nav>
    )
}

export default Nav