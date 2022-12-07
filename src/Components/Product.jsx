//Created by Nikhilesh Killada
import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'
import "../css/Product.css"
//import { Button } from 'react-bootstrap'


export const Product = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);

    return (
        <>
            {products.length !== 0}
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
                        <div className='product-location'>
                            {product.Location}
                        </div>
                        <div className='product-name'>
                            {product.ItemName}
                        </div>
                        <div className='Description'>
                            {product.Description}
                        </div>
                        <div className='product-price'>
                            $ {product.ProductPrice}.00
                        </div>
                        <div className='Phone-number'>
                            Contact no: {product.Phonenumber}
                        </div>
                        <div className='product-status'>
                            {product.Status}
                        </div>

                        <button className='product_details'>Product Details</button>

                                               
                    </div>
                ))}
            </div>
        </>
    )
}