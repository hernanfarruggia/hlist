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

    const getTodoText = (todo) => {
        let text = (<span>{ todo.text }</span>);

        if (todo.state === 'done') text = (<span><del>{ todo.text }</del></span>);

        return text
    }

    const renderItems = (item, key) => {
        return (
            <li className="list-group-item d-flex align-items-center justify-content-between">
                { getTodoText(item) }
                <div>
                    {
                        item.state === 'pending' ?
                            renderDoneBtn(item) :
                            renderUndoneBtn(item)
                    }
                    <button
                        className="btn btn-secondary btn-sm mr-2">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={ () => handleDelete(item.id) }>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
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
                className="btn btn-success btn-sm mr-2"
                onClick={ () => handleDone(todo) }>
                <i className="fas fa-check"></i>
            </button>
        );
    }

    const renderUndoneBtn = (todo) => {
        return (
            <button
                className="btn btn-warning btn-sm mr-2"
                onClick={ () => handleUndone(todo) }>
                <i className="fas fa-undo"></i>
            </button>
        );
    }

    return (        
        <div className="row">
            <div className="col-12">

                { 
                    _.isEmpty(todos) ?
                        renderEmtpyMessage() :
                        <ul className="list-group">
                            { todos.map(renderItems) }
                        </ul>
                }
                

            </div>
        </div>
    );
}

export default TodoList;