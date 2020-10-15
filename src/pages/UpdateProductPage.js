import React, { Component } from 'react'
import Input from "../components/Input"
import {getProductById,updateProduct} from "../api/ProductService"
import axios from "axios"

export default class UpdateProductPage extends Component {
    state = {
        id: this.props.match.params.id,
        name:null,
        productNumber:null,
        imagePath:null,
        entryDate:null,
        exitDate:null,
        productImage:null,
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
                productNumber: product.productNumber,
                entryDate:product.entryDate,
                imagePath:product.imagePath,
                exitDate:product.exitDate
            })
            console.log(product)
        }          
    )
    }
    
    updateProduct = (e) => { 
        e.preventDefault(); 
        let form_data = new FormData();
        form_data.append('file', this.state.productImage);
        let url = 'http://localhost:8080/files';
        axios.put(url, form_data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
     })
        .then(res => {
            this.setState({
                imagePath: res.data.fileDownloadUri
            })
            let product = {id: this.state.id, name: this.state.name, productNumber: this.state.productNumber, imagePath: this.state.imagePath, entryDate: this.state.entryDate, exitDate:this.state.exitDate}
            updateProduct(product).then(response =>
                 this.props.history.push("/")
             )
        })
        
        .catch(err => console.log(err))

    };
    


    render() {
        return (
            <div className="product-form">
            <form>
                <h1 style={{textAlign:"center"}}>Add Product</h1>
                    <img src={this.state.imagePath} style={{width:"100px",height:"100px"}}/>
                    <Input label="Pick an image" type="file" className="" name="imagePath"/>
                    <Input label="Product name" type="text" value={this.state.name} className="form-control" name="name" onChange={this.onChange}/>
                    <Input label="Product number" type="text" value={this.state.productNumber} className="form-control" name="productNumber" onChange={this.onChange}/>   
                    <div className="button" style={{display:"flex",justifyContent:"center"}}>
                    <button className="btn btn-primary" onClick={this.updateProduct}>
                        Düzenle
                    </button>            
                    </div>
            </form>
        </div>
        )
    }
}
