import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import AddProductPage from "./pages/AddProductPage"
import UpdateProductPage from "./pages/UpdateProductPage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProductsList from './components/ProductsList';

function App(props) {
  return (
    <div>

    <Router> 
    <Navbar/> 
      <div className="container">
          <Route exact path="/" component={ProductsList}/>
          <Route exact path="/products" component={ProductsList}/>
          <Route exact path="/login" component={LoginPage}/> 
          <Route exact path="/add-product" component={AddProductPage}/>           
          <Route exact path="/update-product/:id" component={UpdateProductPage}/>     
      </div>
      </Router>
    </div>
  );
}

export default App;
