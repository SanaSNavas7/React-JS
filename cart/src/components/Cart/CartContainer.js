import React from 'react';
import { useGlobalContext } from '../AppProvider/AppProvider';
import CartItem from './CartItem';

function CartContainer() {
  const { cart, loading } = useGlobalContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className='total'>
          <h4>Total 
            <span>${cart.reduce((acc, item) => acc + item.price * item.amount, 0)}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>Clear cart</button>
      </footer>
    </section>
  );
}

export default CartContainer;
