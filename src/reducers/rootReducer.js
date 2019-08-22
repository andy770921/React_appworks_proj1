const initState = {
    todos: [
        { content: "Buy some milk", isFinished: false, id: 1 },
        { content: "Play games", isFinished: false, id: 2 },
        { content: "Sleep", isFinished: true, id: 3 }
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_TODO") {
        let newTodoArray = state.todos.filter(element => (action.id !== element.id));
        return {
            ...state,
            todos: newTodoArray
        }
    } else if (action.type === "CONFIRM_TODO") {
        let newTodoArray = state.todos.map(element => {
            if (action.id === element.id) {
                element.isFinished = true;
                return element;
            } else { return element; }
        });
        return {
            ...state,
            todos: newTodoArray
        }
    }
    return state;
}

export default rootReducer;