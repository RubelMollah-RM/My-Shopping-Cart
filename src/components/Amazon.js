import React from 'react';
import '../data';
import list from '../data';
import '../style/amazon.css';
import Carts from './Carts';

const Amazon = ({handelClick}) => {
    return (
        <section>
           {
            list.map(item => <Carts 
            key={item.id}
            item = {item}
            handelClick = {handelClick}
            />)
            }
        </section>
    );
};

export default Amazon;