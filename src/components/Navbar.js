import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/UMLthriftylogo.svg'

export const Navbar = () => {
    return (
        <div className="Navbox">
            <div className="leftside">
                <img src={logo} alt=''/>
            </div>
            <div className="rightside">
                <Link to='/signup' className="navlinks">Sign Up</Link>
                <Link to='/login' className="navlinks">Login In</Link>
            </div>
        </div>
    )
}