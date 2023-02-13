import React, { useState } from 'react';
import './App.css';
import './style/warning.css';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Navbar from './components/Navbar';



function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handelClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Amazon handelClick={handelClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }

      {
        warning && <div className='warning'>item already added to your card</div>
      }
    </React.Fragment>

  );
}

export default App;
