import React from 'react';
import { connect } from 'react-redux';

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
        return (
            <div>
                { 
                    this.props.error ?
                        this.renderError() :
                        null
                }
                <TodoForm handleNewItem={this.handleNewItem} />

                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3>Pending tasks</h3>
                        </div>
                    </div>
                    <TodoList
                        todos={this.props.pending}
                        handleDeleteItem={ this.handleDeleteItem }
                        handleUpdateTodo={ this.handleUpdateTodo } />
                </div>

                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3>Complete tasks</h3>
                        </div>
                    </div>
                    <TodoList
                        todos={this.props.done}
                        handleDeleteItem={ this.handleDeleteItem }
                        handleUpdateTodo={ this.handleUpdateTodo } />
                </div>
            </div>
        );
    }

    renderError () {
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