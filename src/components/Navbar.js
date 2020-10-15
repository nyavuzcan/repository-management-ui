import React from 'react'
import {Link} from "react-router-dom"



export default function Navbar(){


        return (
            <div>
                <div className="navbar">
                    <Link to="/"><h1>AVRASYA</h1></Link>
                    <nav>                  
                        <Link to="/">Home</Link>
                        <Link to="/login">Login<i className="fas fa-sign-in-alt" style={{marginLeft:"5px"}}/></Link>
                        <Link to="/add-product">Add Product<i className="fas fa-user-plus" style={{marginLeft:"5px"}}/></Link>                
                    </nav>
                    
                </div>
            </div>
        )
  
}
