import React from 'react'
import product from '../images/stickers.jpg';
import { BsCurrencyRupee } from 'react-icons/bs';

const Cartsavedcard = () => {
    return (
        <>
            <div className="cart97">
                <div className="cart98">
                    <img src={product} alt="product" />
                </div>
                <div className="cart99">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi qui cum sint inventore doloribus debitis repellat. Voluptates beatae, repellendus corporis tempora vitae error adipisci explicabo sint ab impedit perspiciatis?
                </div>
                <div className="cart100">
                    <BsCurrencyRupee /> <span className='cart101'>
                        49.00
                    </span>
                </div>
                <div className="cart102">
                    In stock
                </div>
                <div className="cart103">
                    Sold by XOREWEAR
                </div>
                <div className="cart104">
                    Xorewear Delivered
                </div>
                <div className="cart105">
                    Move to cart
                </div>
                <div className="cart106">
                    Delete
                </div>
                <div className="cart106">
                    Add to list
                </div>
                <div className="cart106">
                    See more like this
                </div>
            </div>
        </>
    )
}

export default Cartsavedcard