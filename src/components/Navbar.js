import React from 'react'
import {Link,BrowserRouter as Router} from "react-router-dom"
import { addProduct } from '../api/ProductService'


export default function Navbar(){


        return (
            <div>
                <header className="navbar">
                    <h1>Logo</h1>
                    <nav>                  
                        <Link to="/">Home</Link>
                        <Link to="/login">Login<i className="fas fa-sign-in-alt" style={{marginLeft:"5px"}}/></Link>
                        <Link to="/add">Add Product<i className="fas fa-user-plus" style={{marginLeft:"5px"}}/></Link>                
                    </nav>
                    
                </header>
            </div>
        )
  
}
