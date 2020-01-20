import _ from 'lodash';

export const TODO_ADD = 'TODO_ADD'
export const TODO_ADD_FAILURE = 'TODO_ADD_FAILURE'
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_GET = 'TODO_GET';
export const TODO_GET_FAILURE = 'TODO_GET_FAILURE';
export const TODO_GET_SUCCESS = 'TODO_GET_SUCCESS';
export const TODO_UPDATE = 'TODO_UPDATE'


export function todo_get () {
    return dispatch => {
        fetch.get('/todos')
            .then(res => dispatch(todo_get_success(res)))
            .catch(err => dispatch(todo_get_failure(err)));
    }
}

function todo_get_success (todos) {
    return {
        type: TODO_GET_SUCCESS,
        todos
    };
}

function todo_get_failure (err) {
    return {
        type: TODO_GET_FAILURE,
        err
    };
}

export function todo_add (text) {
    return dispatch => {
        
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify({ text, state: 'active' }),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // };
        
        // fetch('url', options)
        //     .then(res => res.json())
        //     .then(todos => dispatch(todo_add_success(todos)))
        //     .catch(err => dispatch(todo_add_failure(err)));

        dispatch(todo_add_success({ text, state: 'active' }));
    }
}

function todo_add_success (todo) {
    return {
        type: TODO_ADD,
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
    return {
        type: TODO_DELETE,
        id
    };
}