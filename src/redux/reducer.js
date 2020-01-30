import { 
    TODO_ADD_FAILURE,
    TODO_ADD_SUCCESS,
    TODO_DELETE_FAILURE,
    TODO_DELETE_SUCCESS,
    TODO_GET_FAILURE,
    TODO_GET_SUCCESS,
    TODO_UPDATE_FAILURE,
    TODO_UPDATE_SUCCESS
 } from './actions';

const initialState = {
    todos: [],
    pending: [],
    done: [],
    error: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TODO_ADD_SUCCESS:
            return {
                ...state,
                error: false,
                todos: [
                    ...state.todos,
                    action.todo
                ],
                pending: [
                    ...state.pending,
                    action.todo
                ]
            };

        case TODO_ADD_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case TODO_DELETE_SUCCESS:
            return {
                error: false,
                todos: state.todos.filter(todo => todo.id !== action.id),
                pending: state.pending.filter(todo => todo.id !== action.id),
                done: state.done.filter(todo => todo.id !== action.id)
            };

        case TODO_DELETE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case TODO_GET_SUCCESS:
            return {
                error: false,
                todos: action.todos,
                pending: action.todos.filter(todo => todo.state === 'pending'),
                done: action.todos.filter(todo => todo.state === 'done')
            };

        case TODO_GET_FAILURE:
            return {
                ...state,
                error: action.error.message
            };

        case TODO_UPDATE_SUCCESS:
            return {
                error: false,
                todos: action.todos,
                pending: action.todos.filter(todo => todo.state === 'pending'),
                done: action.todos.filter(todo => todo.state === 'done')
            };

        case TODO_UPDATE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}

export default reducer;