import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='TodoCounter'>Has been completed {completed} of {total} To-Do's</h2>
    );
}

export { TodoCounter };