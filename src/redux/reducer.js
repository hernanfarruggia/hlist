import { 
    TODO_ADD,
    TODO_DELETE,
    TODO_GET_SUCCESS,
    TODO_UPDATE
 } from './actions';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case TODO_GET_SUCCESS:
            return {
                todos: action.todos
            };

        case TODO_ADD:
            return {
                todos: [
                    ...state.todos,
                    action.todo
                ]
            };

        case TODO_UPDATE:
            return {
                todos: action.todos
            };

        case TODO_DELETE:
            return {
                todos: state.todos.filter((todo, key) => {
                    return key !== action.id
                })
            };

        default:
            return state;
    }
}

export default reducer;