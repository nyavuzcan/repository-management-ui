import React, { Component } from 'react'
import Input from "../components/Input"
import {addProduct} from "../api/ProductService"

export default class AddProductPage extends Component {

    state = {
        image:null,
        product:null,
        productNumber:null
    }

    onChange = (e) => {
        const {name,value} = e.target

        this.setState({
            [name]:value
        })
    }

    addProduct = (e) => {
        e.preventDefault();
        let product = {product:this.state.product, productNumber:this.state.productNumber}
        addProduct(product).then(response => 
            this.props.history.push("/")
            )
            console.log(product)
    }

    render() {
        return (
            <div className="product-form">
            <form>
                <h1 style={{textAlign:"center"}}>Add Product</h1>
                   
                    <Input label="Pick an image" type="file"  className="" name="image" onChange={this.onChange}/>
                    <Input label="Product name" type="text" className="form-control" name="product" onChange={this.onChange}/>
                    <Input label="Product number" type="text" className="form-control" name="productNumber" onChange={this.onChange}/>   
                    <button class="ui primary button" onClick={this.addProduct}>
                        Ekle
                    </button>            
            </form>
        </div>
        )
    }
}
