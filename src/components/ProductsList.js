import React, { Component } from 'react'
import {getProducts, deleteProduct,updateProduct} from "../api/ProductService"
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
        deleteProduct(id).then(respone =>
            this.componentDidMount()
        )

    }

    render() {
        return (            

            <div className="product-list">
                {this.state.products.map(product => {
                return <Product  key = {product.id}  imagePath={product.imagePath} name={product.name} entryDate={product.entryDate} exitDate={product.exitDate} productNumber={product.productNumber}
                updateProduct ={() => this.updateProduct(product.id)} deleteProduct={() => this.deleteProduct(product.id)}/>

                }
                )}

            </div>
            
        )
    }
}
