import React, { useEffect, useState } from 'react';
import '../style/cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
    const handelPrice = () => {
        let ans = 0;
        cart.map(item => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    };

    const handelRemove = (id) => {
        const arr = cart.filter(item => item.id !== id)
        setCart(arr)
    }

    useEffect(() => {
        handelPrice();
    })

    return (
        <article>
            {
                cart.map(item => <div className='cart-box' key={item.id}>
                    <div className='cart-img'>
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handelRemove(item.id)}>Remove</button>
                    </div>
                </div>)
            }
            <div className='total'>
                <span>Total Price of your cart</span>
                <span>Rs - {price}</span>
            </div>

        </article>
    );
};

export default Cart;