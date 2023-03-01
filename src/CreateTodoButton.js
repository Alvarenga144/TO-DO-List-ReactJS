import React from './CreateTodoButton';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Modal desplegado...')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };