import React, { Component } from 'react'
import Input from "../components/Input"
import {getProductById,updateProduct} from "../api/ProductService"

export default class UpdateProductPage extends Component {
    state = {
        id: this.props.match.params.id,
        name:null,
        productNumber:null
    }

    onChange = (e) => {
        const {name,value} = e.target

        this.setState({
            [name]:value
        })
    }

    componentDidMount(){
        getProductById(this.state.id).then(response => {
            let product = response.data
            this.setState({
                name: product.name,
                productNumber: product.productNumber
            })
            console.log(product)
        }          
    )
    }
    
    updateProduct = (e) => { 
        e.preventDefault(); 
        let product = {name: this.state.name, productNumber: this.state.productNumber}
       updateProduct(this.state.id,product).then(response =>
            this.props.history.push("/")
        )
        
    }


    render() {
        return (
            <div className="product-form">
            <form>
                <h1 style={{textAlign:"center"}}>Add Product</h1>
                   
                    <Input label="Pick an image" type="file" className="" name="image" onChange={this.onChange}/>
                    <Input label="Product name" type="text" value={this.state.name} className="form-control" name="name" onChange={this.onChange}/>
                    <Input label="Product number" type="text" value={this.state.productNumber} className="form-control" name="productNumber" onChange={this.onChange}/>   
                    <button className="ui primary button" onClick={this.updateProduct}>
                        Düzenle
                    </button>            
            </form>
        </div>
        )
    }
}
