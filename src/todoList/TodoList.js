import React from 'react';
import _ from 'lodash';
import TodoListItem from '../todoListItem';
import './todoList.css';

const TodoList = (props) => {

    // This clones the todos array and reverse the order to always display the new on top 
    const todos = props.todos.slice(0, props.todos.length).reverse();

    const renderEmtpyMessage = () => {
        return (
            <div className="empty">
                Nothing to do! Try adding a new task!
            </div>
        );
    }

    return (        
        <div className="row">
            <div className="col-12">
                { 
                    _.isEmpty(todos) ?
                        renderEmtpyMessage() :
                        <ul className="list-group">
                            {
                                todos.map(item => {
                                    return <TodoListItem
                                        key={item._id}
                                        handleDeleteTodo={props.handleDeleteTodo}
                                        handleUpdateTodo={props.handleUpdateTodo}
                                        item={item} />
                                })
                            }
                        </ul>
                }
            </div>
        </div>
    );
}

export default TodoList;