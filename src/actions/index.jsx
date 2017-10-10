import types from '../constants/';

let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    deleteTodo(id) {
        return {
            type: types.DELETE_TODO,
            id,
        };
    },
    getPatients() {
        return {
            type: types.GET_PATIENTS,
        };
    },
    submitTodo(text) {
        return {
            type: types.SUBMIT_TODO,
            id: nextId(),
            text,
        };
    },
    switchTab(target) {
        return {
            type: types.SWITCH_TAB,
            target,
        };
    },
    undeleteTodo(id) {
        return {
            type: types.UNDELETE_TODO,
            id,
        };
    },
};

export default actions;
