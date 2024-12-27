import React from 'react';

function CartItem({ item }) {
  return (
    <article className='cart-item'>
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h4 className='item'>${item.price}</h4>
        <button className='remove-btn'>Remove</button>
      </div>
      <div className='amount-controls'>
        <button className='amount-btn'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.293l3.146 3.147a.5.5 0 0 1-.707.707L8 4.207l-2.439 2.44a.5.5 0 0 1-.707-.707L8 3.293z"/>
          </svg>
        </button>
        <p className='amount-btn'>{item.amount}</p>
        <button className='amount-btn'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8 12.707l-3.146-3.147a.5.5 0 0 1 .707-.707L8 11.793l2.439-2.44a.5.5 0 0 1 .707.707L8 12.707z"/>
          </svg>
        </button>
      </div>
    </article>
  );
}

export default CartItem;
