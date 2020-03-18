import React, { useEffect, useState } from 'react';

const TodoForm = (props)  => {

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [todoValue, setTodoValue] = useState('');
    let inputTodo;

    useEffect(() => {
        inputTodo.focus();
    });

    const handleChange = (e) => {
        setBtnDisabled(e.target.value !== '' ? false : true);
        setTodoValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            handleClick();
        }
    }

    const handleClick = () => {
        props.handleNewItem(todoValue);
        clearItem();
        inputTodo.focus();
    }

    const clearItem = () => {
        setBtnDisabled(true);
        setTodoValue('');
    }

    return (
        <div className="container mt-5">
            <form className="d-flex">
                <input
                    className="form-control form-control-lg d-inline mr-3"
                    onChange={ handleChange }
                    onKeyPress={ handleKeyPress }
                    placeholder="What you wanna do?"
                    ref={ (input) => { inputTodo = input; } }
                    type="text"
                    value={ todoValue } />
                <button
                    className="btn btn-primary btn-lg d-inline"
                    disabled={ btnDisabled }
                    onClick={ handleClick } >
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
