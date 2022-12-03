import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Users/vineeshathallapaneni/iwsapp/src/components/logo.jpeg'

export const Navbar = () => {
    return ( 
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt=""/> 
            </div>
            <div className='rightside'>
                <Link to='/signup' className='navlinks'>SIGN UP</Link>
                <Link to='/signin' className='navlinks'>SIGN IN</Link>
    </div> 

         </div>
    )
}