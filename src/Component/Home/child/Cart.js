import React, { useState } from 'react'
import '../Home.css'
function Cart(props) {
    const addedProduct = props.added;
    const [yourProduct, setYourProduct] = useState({})

    const chooseForMe = () => {

        const selectedProduct = Math.floor((Math.random() * 9) + 1);

        const exists = addedProduct.find(product => product.id === selectedProduct);
        if (exists) {
            if (exists.id === selectedProduct) {
                setYourProduct(exists)
            }
        }
    }

    const resetYour = () => {
        setYourProduct('')
        props.reset()
    }
   
    return (
        <div className='product-cart'>
            <h1>Cart</h1>
            {
                addedProduct.map(product => {
                    return (
                        <div className='mt-2 added-product' key={product.id}>
                            <h5 className='mb-0'>{product.name}</h5>
                        </div>
                    )
                })
            }
            <div className='mt-3 '>
                <button onClick={chooseForMe} className='btn btn-sm btn-danger d-block p-2'>Choose Any</button>
                <button onClick={resetYour} className='btn btn-sm btn-outline-danger mt-3 p-2'>Choose Again</button>

            </div>
            <div className='wined-Product mt-5'>
                <h4 className='text-center my-3'>{yourProduct.name}</h4>
                <img src={yourProduct.image} alt="" />
            </div>
        </div>
    )
}

export default Cart