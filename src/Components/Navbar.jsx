//Created by Nagaditya Sri Abhiram
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Config/UserAuthContext'
import logo from "./logo.jpeg"
import { auth } from '../Config/Config'

export const Navbar = () => {

    const navigate = useNavigate()

    const logout = () => {
        auth.signOut().then(() => {
            navigate("/")
        })
    }

    return ( 
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt=""/> 
            </div>
            <div className='rightside'>
                <Link to='/AddProducts' className='navlinks'>Add Products</Link>
                <Link to='/Home' className='navlinks'>Home</Link>
                <button className='logout-btn' onClick={logout}>Logout</button>

            </div> 
         </div>
    )
}

