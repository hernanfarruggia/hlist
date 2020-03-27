export const TODO_ADD_FAILURE = 'TODO_ADD_FAILURE'
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS'
export const TODO_DELETE_FAILURE = 'TODO_DELETE_FAILURE'
export const TODO_DELETE_SUCCESS = 'TODOS_DELETE_SUCCESS'
export const TODO_GET_FAILURE = 'TODO_GET_FAILURE';
export const TODO_GET_SUCCESS = 'TODO_GET_SUCCESS';
export const TODO_UPDATE_SUCCESS = 'TODO_UPDATE_SUCCESS';
export const TODO_UPDATE_FAILURE = 'TODO_UPDATE_FAILURE';

const BASE_URL = 'http://localhost:4000/todos';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const todos_get = () => {
    return async dispatch => {
        const options = {
            headers,
            method: 'GET'
        };

        try {
            let res = await fetch(BASE_URL, options);
            let data = await res.json();

            if (data.error) {
                dispatch(todos_get_failure(data.error.message));
            } else {
                dispatch(todos_get_success(data.data));
            }
        }
        catch (err) {
            dispatch(todos_get_failure(err));
        }
    }
}

const todos_get_success = todos => {
    return {
        type: TODO_GET_SUCCESS,
        todos
    };
}

const todos_get_failure = error => {
    return {
        type: TODO_GET_FAILURE,
        error
    };
}

export const todo_add = name => {
    return async dispatch => {
        const options = {
            headers,
            method: 'POST',
            body: JSON.stringify({ name })
        };

        try {
            let res = await fetch(BASE_URL, options);
            let data = await res.json();

            if (data.error) {
                dispatch(todo_add_failure(data.error.message));
            } else {
                dispatch(todo_add_success(data.data));
            }
        }
        catch (err) {
            dispatch(todo_add_failure(err));
        }
    }
}

const todo_add_success = todo => {
    return {
        type: TODO_ADD_SUCCESS,
        todo
    };
}

const todo_add_failure = error => {
    return {
        type: TODO_ADD_FAILURE,
        error
    };
}

export const todo_delete = id => {
    return async dispatch => {
        const options = {
            headers,
            method: 'DELETE'
        };

        try {
            let res = await fetch(`${BASE_URL}/${id}`, options);
            let data = await res.json();

            if (data.error) {
                dispatch(todo_delete_failure(data.error.message));
            } else {
                dispatch(todo_delete_success(id));
            }
        }
        catch (err) {
            dispatch(todo_delete_failure(err));
        }
    }
}

const todo_delete_success = id => {
    return {
        type: TODO_DELETE_SUCCESS,
        id
    };
}

const todo_delete_failure = error => {
    return {
        type: TODO_DELETE_FAILURE,
        error
    };
}

export const todo_update = todo => {
    return async dispatch => {
        const options = {
            headers,
            method: 'PUT',
            body: JSON.stringify(todo)
        };

        try {
            let res = await fetch(`${BASE_URL}/${todo._id}`, options);
            let data = await res.json();

            if (data.error) {
                dispatch(todo_update_failure(data.error.message));
            } else {
                dispatch(todo_update_success(data.data));
            }
        }
        catch (err) {
            dispatch(todo_update_failure(err));
        }
    }
}

const todo_update_success = todo => {
    return {
        type: TODO_UPDATE_SUCCESS,
        todo
    };
}

const todo_update_failure = error => {
    return {
        type: TODO_UPDATE_FAILURE,
        error
    };
}