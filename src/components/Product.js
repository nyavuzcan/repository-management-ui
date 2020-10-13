import React from 'react'

export default function Product(props) {

    const {productImage,name,entryDate,exitDate,productNumber,updateProduct,deleteProduct} = props

    return (
           <div className="product">
                <div className="ui unstackable items">
                    
                <div className="item" style={{marginTop:"20px"}}>
                 
                    <div className="image">
                    <img src={productImage} alt="no image"/>
                    </div>
                    <div className="content">
                    <a className="header">{name}</a>
                    <div className="product-info">
                    <div className="extra">
                        Adet: {productNumber}
                    </div>
                    <div className="extra"> 
                        Ürün Giriş Tarihi: {entryDate}
                    </div>
                    <div className="extra">
                        Ürün Çıkış Tarihi: {exitDate}
                    </div>
                    </div>
                    </div>
                    
                     </div>
                     <div className="buttons">
                     <button className="ui teal button" onClick={updateProduct}>
                        Düzenle
                    </button>
                    <button className="ui red button" onClick={deleteProduct}>
                        Sil
                    </button>
                    </div>
                </div>
            </div>
        
    )
}
