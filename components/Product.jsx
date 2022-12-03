import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import "../css/Product.css"


export const Product = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);

    return (
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ItemID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-category'>
                            {product.Category}
                        </div>
                        <div className='product-name'>
                            {product.ItemName}
                        </div>
                        <div className='Description'>
                            {product.Description}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        
                    </div>
                ))}
            </div>
        </>
    )
}