import React from 'react';
import { connect } from 'react-redux';

import './todos.css';

import TodoForm from '../todoForm';
import TodoList from '../todoList';

import { todo_add, todo_delete } from '../redux/actions';

class Todos extends React.Component {

    handleNewItem = (newItem) => {
        this.props.todoAdd(newItem);
    }

    handleDeleteItem = (id) => {
        this.props.todoDelete(id);
    }

    render () {
        return (
            <div className="todos">
                <TodoForm
                    handleNewItem={this.handleNewItem} />

                <TodoList
                    todos={this.props.todos}
                    handleDeleteItem={ this.handleDeleteItem } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        todoAdd: (text) => dispatch(todo_add(text)),
        todoDelete: (id) => dispatch(todo_delete(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);