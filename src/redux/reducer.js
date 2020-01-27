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
    error: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TODO_ADD_SUCCESS:
            return {
                error: false,
                todos: [
                    ...state.todos,
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
                todos: state.todos.filter(todo => todo.id !== action.id)
            };

        case TODO_DELETE_FAILURE:
            return {
                ...state,
                error: action.error
            };

        case TODO_GET_SUCCESS:
            return {
                error: false,
                todos: action.todos
            };

        case TODO_GET_FAILURE:
            return {
                ...state,
                error: action.error.message
            };

        case TODO_UPDATE_SUCCESS:
            return {
                error: false,
                todos: action.todos
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