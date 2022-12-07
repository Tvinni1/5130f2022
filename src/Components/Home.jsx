//Created by Nikhilesh Killada
import React from 'react'
import '../css/Home.css'
import { AddProducts } from './AddProducts'
import { Navbar } from './Navbar'
import { Product } from './Product'

export const Home = () => {
    return ( 
    <div className='wrapper'>
        <Navbar/>
        <Product/>
    </div>
    )
}
