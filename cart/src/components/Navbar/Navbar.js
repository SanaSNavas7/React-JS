import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className='nav-center'>
        <h3>Cart App</h3>
        <div className='nav-container'>
          <svg>
          xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          
            <path d="M4 4h2l3 7h8l3-7h2" />
            <circle cx="9" cy="21" r="1" />
            <circle cx="17" cy="21" r="1" />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>4</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
