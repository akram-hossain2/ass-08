import React, { useState, useEffect } from 'react'
import Bonus from '../Bonus'
import './Home.css'
import Card from './child/Card'
import Cart from './child/Cart'
const Home = () => {
    const [products, setProducts] = useState([])
    const [carts, setCart] = useState([])

    useEffect(() => {
        fetch('./product.JSON')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const HandleCart = (products) => {
        const exists = carts.find(product => product.id === products.id);
        if (!exists) {
            if (carts.length < 4) {
                const newCarts = [...carts, products]
                setCart(newCarts)
            } else {
                limitedAlert.style.display = 'flex'
                selectinoAlert.style.display = 'none'
            }
        }
        else {
            selectinoAlert.style.display = 'flex'
            limitedAlert.style.display = 'none'
        }

    }
    const resetSetProduct = () => {
        setCart([])
    }
    const limitedAlert = document.getElementById('alert-limit')
    const selectinoAlert = document.getElementById('alert-selected')
    const close = () => {
        selectinoAlert.style.display = 'none'
        limitedAlert.style.display = 'none'
    }
    return (
        <div className='bg-light'> 
        <h1 className='text-center py-3 mt-5 fw-bold'>Fake Store</h1>
            <h3 className='text-center mb-4'>Choose Any 4 Item</h3>
            <div className='container box'>

                <div className='product-container'>
                    {
                        products.map(product => {
                            return (
                                <Card key={product.id}
                                    handler={HandleCart}
                                    selectinoAlert={selectinoAlert}
                                    product={product} />
                            )
                        })
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        added={carts}
                        reset={resetSetProduct}
                    />
                </div>
            </div>
    )
}

export default Home