export const TODO_ADD = 'TODO_ADD'
export const TODO_ADD_FAILURE = 'TODO_ADD_FAILURE'
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_GET = 'TODO_GET';
export const TODO_GET_FAILURE = 'TODO_GET_FAILURE';
export const TODO_GET_SUCCESS = 'TODO_GET_SUCCESS';
export const TODO_UPDATE = 'TODO_UPDATE'

const url = 'http://localhost:4000/';


export function todos_get () {
    return dispatch => {
        const options = {
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
            method: 'POST',
            body: JSON.stringify({
                todo: {
                    text,
                    status: 'active'
                }
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        };
        
        fetch(`${url}todos`, options)
            .then(res => {
                return res.json()
                    .then(data => data);
            })
            .then(todo => {
                dispatch(todo_add_success(todo))
            })
            .catch(err => dispatch(todo_add_failure(err)));
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