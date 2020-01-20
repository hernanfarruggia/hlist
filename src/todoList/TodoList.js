import React from 'react';
import _ from 'lodash';
import './todoList.css';

function TodoList (props) {

    const handleDelete = (id) => {
        props.handleDeleteItem(id)
    }

    const renderItems = (item, key) => {
        return (
            <div className="item" key={ key }>
                <div className="item-text">{ item.text }</div>
                <div className="item-action">
                    <button
                        className="button-secondary"
                        onClick={ () => handleDelete(key) }>
                        -
                    </button>
                </div>
            </div>
        );
    }

    const renderEmtpyMessage = () => {
        return (
            <div className="empty">
                Nothing to do! Try adding a new task!
            </div>
        );
    }

    return (
        <div className="todo-list">
            { 
                _.isEmpty(props.todos) ?
                renderEmtpyMessage() :
                props.todos.map(renderItems) 
            }
        </div>
    );
}

export default TodoList;