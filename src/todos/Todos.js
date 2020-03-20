import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoForm from '../todoForm';
import TodoList from '../todoList';

import {
    todo_add,
    todo_delete,
    todos_get,
    todo_update
} from '../redux/actions';

const Todos = () => {

    const todosDone = useSelector(state => state.done);
    const todosPending = useSelector(state => state.pending);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todos_get())
    }, [dispatch]);

    const handleNewItem = newItem => {
        dispatch(todo_add(newItem));
    }

    const handleDeleteTodo = id => {
        dispatch(todo_delete(id));
    }

    const handleUpdateTodo = todo => {
        dispatch(todo_update(todo));
    }

    const renderError = () => {
        return (
            <div className="error">
                { error }
            </div>
        );
    }

    return (
        <div>
            { error ? renderError() : null }

            <TodoForm handleNewItem={ handleNewItem } />

            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3>Pending tasks</h3>
                    </div>
                </div>
                <TodoList
                    todos={ todosPending }
                    handleDeleteTodo={ handleDeleteTodo }
                    handleUpdateTodo={ handleUpdateTodo } />
            </div>

            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3>Complete tasks</h3>
                    </div>
                </div>
                <TodoList
                    todos={ todosDone }
                    handleDeleteTodo={ handleDeleteTodo }
                    handleUpdateTodo={ handleUpdateTodo } />
            </div>
        </div>
    );
}

export default Todos;