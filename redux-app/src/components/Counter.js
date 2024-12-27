import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { increment, decrement } from '../Redux/Reducer/Reducer';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='counter-container'>
      <h2 className='counter-title'>
        React JS Redux Example
      </h2>
      <p className="counter-value">{count}</p>
      <div className='counter-buttons'>
        <button className='counter-button' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className='counter-button' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
