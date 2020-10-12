import React, { Component } from 'react'
import Product from "./Product"

export default class ProductsList extends Component {

    state = {
        products:[
          
        ]
    }


    render() {
        return (            

            <div className="product-list">
                {this.state.products.map(product => 
                <div className="ui unstackable items">
                    
                <div className="item" style={{marginTop:"20px"}}>
                 
                    <div className="image">
                    <img src={product.productImage} alt="no image"/>
                    </div>
                    <div className="content">
                    <a className="header">{product.product}</a>
                    <div className="product-info">
                    <div className="extra">
                        Adet: {product.productNumber}
                    </div>
                    <div className="extra">
                        Ürün Giriş Tarihi: {product.entryDate}
                    </div>
                    <div className="extra">
                        Ürün Çıkış Tarihi: {product.exitDate}
                    </div>
                    </div>
                    </div>
                    
                     </div>
                     <button className="ui primary button">
                    Düzenle
                    </button>
                    <button class="ui primary button">
                    Sil
                    </button>
                </div>
                )}
            </div>
        )
    }
}
