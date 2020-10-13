import React, { Component } from 'react'
import {getProducts, deleteProduct} from "../api/ProductService"
import Product from "./Product"

export default class ProductsList extends Component {

    state = {
        products:[
          
        ]
    }

    componentDidMount(){
        getProducts().then(response => 
            this.setState({
                products: response.data
            }))
    }

    updateProduct = (id) => {
        this.props.history.push(`/update-product/${id}`)
    }

    deleteProduct = (id) => {
        deleteProduct(id).then(response => 
            this.setState({products: this.state.products.filter(products => products.id !== id)})
            )
    }

    render() {
        return (            

            <div className="product-list">
                {this.state.products.map(product => {
                return <Product productImage={product.productImage} name={product.name} entryDate={product.entryDate} exitDate={product.exitDate} productNumber={product.productNumber} 
                updateProduct ={() => this.updateProduct(product.id)} deleteProduct={() => this.deleteProduct(product.id)}/>
                }
                )}
            </div>
            
        )
    }
}
