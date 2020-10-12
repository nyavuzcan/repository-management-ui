import React from 'react'

export default function Product(props) {

    const {productId,productImage,productName,entryDate,exitDate,productNumber} = props

    return (
        <div className="product">
            <div className="product-info">
            {productId} {productImage} {productName} {productNumber} 
            </div>
            <div className="dates">
            {entryDate} / {exitDate} 
            </div>
        </div>
    )
}
