import React, { useState } from 'react';
import data from '../StaticData/data';

function Para() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    } else if (amount > 10) { // Adjust this based on your data size and requirement
      amount = 10;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Tired of lorem ipsum?</h3>
      <form className='loreum-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default Para;
