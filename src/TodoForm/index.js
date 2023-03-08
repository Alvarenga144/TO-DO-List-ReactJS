import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);

    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write a new TASK</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Make the homework"
                required
            />
            <div  className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={!newTodoValue}
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>

        </form>
    );
}

export { TodoForm };