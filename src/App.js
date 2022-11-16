import React, { Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Home } from './components/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addproducts' element={<AddProducts/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
