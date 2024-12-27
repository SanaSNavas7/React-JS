import React from 'react';

function List({ people }) {
  return (
    <div>
      {people.map((person) => (
        <article className='person' key={person.id}>
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default List;
