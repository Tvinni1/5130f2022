/*
import React, { Component } from 'react'
import { Home } from './Components/Home'
import { BrowserRouter, Route } from 'react-router-dom'



export class App extends Component {
    

    render() {
        return (
            
                    <BrowserRouter>
                        
                            {/* home }
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                          
                            
                        
                    </BrowserRouter>
                
        )
    }
}

export default App;*/






import './App.css';
import { Home } from './components/Home'
import { BrowserRouter as Router} from 'react-router-dom'
import { AddProducts } from './components/AddProducts';
import {ProductsContextProvider} from './global/ProductsContext'

function App() {
    return ( 
        <ProductsContextProvider>
        <Router>
        <div className = "App">
        <p> < Home /> </p>
       <p> <AddProducts /> </p>
       
        </div>
        </Router>
        </ProductsContextProvider>
    );
}

export default App;