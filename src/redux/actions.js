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

export function todos_get () {
    return dispatch => {
        const options = {
            headers,
            method: 'GET'
        };

        fetch(BASE_URL, options)
            .then(res => {
                return res.json()
                    .then(res => {
                        if (res.error) {
                            dispatch(todos_get_failure(res.error.message));
                        } else {
                            dispatch(todos_get_success(res.data));
                        }
                    })
                    .catch(err => dispatch(todos_get_failure(err)));
            })
            .catch(err => dispatch(todos_get_failure(err)));
    }
}

function todos_get_success (todos) {
    return {
        type: TODO_GET_SUCCESS,
        todos
    };
}

function todos_get_failure (error) {
    return {
        type: TODO_GET_FAILURE,
        error
    };
}

export function todo_add (text) {
    return dispatch => {
        const options = {
            headers,
            method: 'POST',
            body: JSON.stringify({ text })
        };
        
        fetch(BASE_URL, options)
            .then(res => {
                return res.json()
                    .then(res => {
                        if (res.error) {
                            dispatch(todo_add_failure(res.error.message));
                        } else {
                            dispatch(todo_add_success(res.data));
                        }
                    })
                    .catch(err => dispatch(todo_add_failure(err)));
            })
            .catch(err => dispatch(todo_add_failure(err)));
    }
}

function todo_add_success (todo) {
    return {
        type: TODO_ADD_SUCCESS,
        todo
    };
}

function todo_add_failure (error) {
    return {
        type: TODO_ADD_FAILURE,
        error
    };
}

export function todo_delete (id) {
    return dispatch => {
        const options = {
            headers,
            method: 'DELETE'
        };

        fetch(`${BASE_URL}/${id}`, options)
            .then(res => {
                return res.json()
                    .then(res => {
                        if (res.error) {
                            dispatch(todo_delete_failure(res.error.message));
                        } else {
                            dispatch(todo_delete_success(id));
                        }
                    })
                    .catch(err => dispatch(todo_delete_failure(err)));
            })
            .catch(err => dispatch(todo_delete_failure(err)));
    }
}

function todo_delete_success (id) {
    return {
        type: TODO_DELETE_SUCCESS,
        id
    };
}

function todo_delete_failure (error) {
    return {
        type: TODO_DELETE_FAILURE,
        error
    };
}

export function todo_update (todo) {
    return dispatch => {
        const options = {
            headers,
            method: 'PUT',
            body: JSON.stringify(todo)
        };

        fetch(`${BASE_URL}/${todo._id}`, options)
            .then(res => {
                return res.json()
                    .then(res => {
                        if (res.error) {
                            dispatch(todo_update_failure(res.error.message));
                        } else {
                            dispatch(todo_update_success(res.data));
                        }
                    })
                    .catch(err => dispatch(todo_update_failure(err)));
            })
            .catch(err => dispatch(todo_update_failure(err)));
    }
}

function todo_update_success (todo) {
    return {
        type: TODO_UPDATE_SUCCESS,
        todo
    };
}

function todo_update_failure (error) {
    return {
        type: TODO_UPDATE_FAILURE,
        error
    };
}