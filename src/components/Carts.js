import React from 'react';
import '../style/carts.css';

const Carts = ({item, handelClick}) => {
    const {img, title, author, price} = item;
    
    return (
        <div className='cards'>
            <div className="image-box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>price :$ {price}</p>
                <button onClick={() => handelClick(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Carts;