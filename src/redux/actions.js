export const TODO_ADD_FAILURE = 'TODO_ADD_FAILURE'
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS'
export const TODO_DELETE_FAILURE = 'TODO_DELETE_FAILURE'
export const TODO_DELETE_SUCCESS = 'TODOS_DELETE_SUCCESS'
export const TODO_GET_FAILURE = 'TODO_GET_FAILURE';
export const TODO_GET_SUCCESS = 'TODO_GET_SUCCESS';
export const TODO_UPDATE_SUCCESS = 'TODO_UPDATE_SUCCESS';
export const TODO_UPDATE_FAILURE = 'TODO_UPDATE_FAILURE';

const url = 'http://localhost:4000/';
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

        fetch(`${url}todos`, options)
            .then(res => {
                return res.json()
                    .then(data => data);
            })
            .then(todos => dispatch(todos_get_success(todos)))
            .catch(err => dispatch(todos_get_failure(err)));
    }
}

function todos_get_success (todos) {
    return {
        type: TODO_GET_SUCCESS,
        todos
    };
}

function todos_get_failure (err) {
    return {
        type: TODO_GET_FAILURE,
        err
    };
}

export function todo_add (text) {
    return dispatch => {
        const options = {
            headers,
            method: 'POST',
            body: JSON.stringify({
                todo: {
                    text,
                    status: 'active'
                }
            })
        };
        
        fetch(`${url}todos`, options)
            .then(res => {
                return res.json()
                    .then(res => res.data);
            })
            .then(todo => dispatch(todo_add_success(todo)))
            .catch(err => dispatch(todo_add_failure(err)));
    }
}

function todo_add_success (todo) {
    return {
        type: TODO_ADD_SUCCESS,
        todo
    };
}

function todo_add_failure (err) {
    return {
        type: TODO_ADD_FAILURE,
        msg: err
    };
}

export function todo_delete (id) {
    return dispatch => {
        const options = {
            headers,
            method: 'DELETE'
        };

        fetch(`${url}todos/${id}`, options)
            .then(() => dispatch(todos_delete_success(id)))
            .catch(err => dispatch(todos_delete_failure(err)));
    }
}

function todos_delete_success (id) {
    return {
        type: TODO_DELETE_SUCCESS,
        id
    };
}

function todos_delete_failure (err) {
    return {
        type: TODO_DELETE_FAILURE,
        msg: err
    };
}