import React, {useState} from 'react';

const TodoListItem = (props) => {

    const item = props.item;
    
    const [todoDescription, setTodoDescription] = useState(item.description);
    const [showDescription, toggleDescription] = useState(false);
    const [isEditMode, toggleEditMode] = useState(false);

    const handleDelete = (id) => {
        props.handleDeleteTodo(id)
    }

    const handleDone = (todo) => {
        todo.state = 'done';
        props.handleUpdateTodo(todo);
    }

    const handleUndone = (todo) => {
        todo.state = 'pending';
        props.handleUpdateTodo(todo);
    }

    const handleUpdate = (todo) => {
        todo.description = todoDescription;
        props.handleUpdateTodo(todo);
        toggleEditMode(!isEditMode);
    }

    const getTodoName = (todo) => {
        let name = (<span>{ todo.name }</span>);

        if (todo.state === 'done') name = (<span><del>{ todo.name }</del></span>);

        return name
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

    const renderViewMode = () => {
        return (
            <li className="list-group-item d-flex flex-column" key={ item._id }>
                <div className="d-flex align-items-center justify-content-between">
                    <div onClick={() => toggleDescription(!showDescription)}>
                        { getTodoName(item) }
                    </div>
                    <div>
                        {
                            item.state === 'pending' ?
                                renderDoneBtn(item) :
                                renderUndoneBtn(item)
                        }
                        <button
                            className="btn btn-secondary btn-sm mr-2"
                            onClick={ () => toggleEditMode(!isEditMode) }>
                            <i className="fas fa-edit"></i>
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={ () => handleDelete(item._id) }>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                {
                    showDescription ?
                        <div className="mt-3">
                            { 
                                item.description ?
                                    item.description :
                                    'Esto esta vacio! Que te parece si agregamos algo!'
                            }
                        </div> :
                        null
                }
            </li>
        );
    }

    const renderEditMode = () => {
        return (
            <li className="list-group-item d-flex flex-column" key={ item._id }>
                <div className="d-flex align-items-center justify-content-between">
                    { getTodoName(item) }
                    <div>
                        <button
                            className="btn btn-success btn-sm mr-2"
                            onClick={ () => handleUpdate(item) }>
                            <i className="fas fa-save"></i>
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={ () => toggleEditMode(!isEditMode) }>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-3">
                    <textarea
                        className="form-control form-control-m"
                        onChange={(e) => setTodoDescription(e.target.value)}
                        placeholder="Description"
                        value={todoDescription}>
                    </textarea>
                </div>
            </li>
        );
    }

    return isEditMode ? renderEditMode() : renderViewMode();
}

export default TodoListItem;