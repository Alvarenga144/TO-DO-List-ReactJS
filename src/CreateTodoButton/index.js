import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        // Toggle para agregar task
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };