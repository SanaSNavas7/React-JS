import React from 'react';
import {FaEdit,FaTrash} from 'react-icons/fa'
function List() {
  return (
    <div className='todo-list'>
      <article className='todo-item'>
        <p>Sample</p>
        
        <div className='btn-container'>
          <button className='edit-btn'>
            <FaEdit/>
          </button>
          <button className='delete-btn'>
            <FaTrash/>
          </button>
        </div>
      </article>
    </div>
  );
}

export default List;
