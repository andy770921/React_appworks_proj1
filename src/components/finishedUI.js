import React from "react";
import TodoUi from "./todoUI";

const FinishedUi = (props) => {

    function handleDeletePassData (id) {
        let newTodos = props.parentState.todos.filter(element => { return element.id !== id });
        props.deleteNewTodo(newTodos);
    }

    const filteredTodos = props.parentState.todos.filter(element => { return element.isFinished === true });
    return (
        <div>
            <h4 className = "center">Finished Page</h4>
            <TodoUi todoArray={filteredTodos} deleteTodo={handleDeletePassData} />
        </div>
    );
}
export default FinishedUi;