import React from 'react';
import _ from 'lodash';
import './todoList.css';

function TodoList (props) {

    // This clones the todos array and reverse the order to always display the new on top 
    const todos = props.todos.slice(0, props.todos.length).reverse();

    const handleDelete = (id) => {
        props.handleDeleteItem(id)
    }

    const handleDone = (todo) => {
        todo.state = 'done';
        props.handleUpdateTodo(todo);
    }

    const handleUndone = (todo) => {
        todo.state = 'pending';
        props.handleUpdateTodo(todo);
    }

    const getItemProps = (todo) => {
        return {
            className: todo.state === 'pending' ? 'item' : 'item-done'
        }
    }

    const renderItems = (item, key) => {
        return (
            <div { ...getItemProps(item) } key={ key }>
                <div className="item-text">{ item.text }</div>
                <div className="item-action">
                    {
                        item.state === 'pending' ?
                            renderDoneBtn(item) :
                            renderUndoneBtn(item)
                    }
                    &nbsp;
                    <button
                        className="button-secondary"
                        onClick={ () => handleDelete(item.id) }>
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

    const renderDoneBtn = (todo) => {
        return (
            <button
                className="button-tertiary"
                onClick={ () => handleDone(todo) }>
                ok
            </button>
        );
    }

    const renderUndoneBtn = (todo) => {
        return (
            <button
                className="button-tertiary"
                onClick={ () => handleUndone(todo) }>
                !
            </button>
        );
    }

    return (
        <div className="todo-list">
            { 
                _.isEmpty(todos) ?
                    renderEmtpyMessage() :
                    todos.map(renderItems) 
            }
        </div>
    );
}

export default TodoList;