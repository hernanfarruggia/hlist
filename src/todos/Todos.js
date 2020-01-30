import React from 'react';
import { connect } from 'react-redux';

import './todos.css';

import TodoForm from '../todoForm';
import TodoList from '../todoList';

import {
    todo_add,
    todo_delete,
    todos_get,
    todo_update
} from '../redux/actions';

class Todos extends React.Component {

    componentDidMount () {
        this.props.todosGet()
    }

    handleNewItem = (newItem) => {
        this.props.todoAdd(newItem);
    }

    handleDeleteItem = (id) => {
        this.props.todoDelete(id);
    }

    handleUpdateTodo = (todo) => {
        this.props.todoUpdate(todo);
    }

    render () {
        console.log('render');
        return (
            <div className="todos">
                { 
                    this.props.error ?
                        this.renderError() :
                        null
                }
                <TodoForm
                    handleNewItem={this.handleNewItem} />

                <h3>Pending tasks</h3>
                <TodoList
                    todos={this.props.pending}
                    handleDeleteItem={ this.handleDeleteItem }
                    handleUpdateTodo={ this.handleUpdateTodo } />

                <h3>Complete tasks</h3>
                <TodoList
                    todos={this.props.done}
                    handleDeleteItem={ this.handleDeleteItem }
                    handleUpdateTodo={ this.handleUpdateTodo } />
            </div>
        );
    }

    renderError () {
        console.log('renderError');
        return (
            <div className="error">
                { this.props.error }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        todoAdd: (text) => dispatch(todo_add(text)),
        todoDelete: (id) => dispatch(todo_delete(id)),
        todosGet: () => dispatch(todos_get()),
        todoUpdate: (todo) => dispatch(todo_update(todo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);