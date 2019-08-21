import React from "react";
import TodoUi from "./todoUI";

const OngoingUi = (props) => {

    function handleDeletePassData (id) {
        let newTodos = props.parentState.todos.filter(element => { return element.id !== id });
        props.deleteNewTodo(newTodos);
    }
    function handleConfirmPassData (id) {
        let newTodos = props.parentState.todos.map(element => {
            if (element.id === id) {
                element.isFinished = true;
                return element;
            } else { return element; }
        });
        props.confirmNewTodo(newTodos);
    }

    const filteredTodos = props.parentState.todos.filter(element => { return element.isFinished === false });
    return (
        <div>
            <h4 className = "center">On Going Page</h4>
            <TodoUi todoArray={filteredTodos} deleteTodo={handleDeletePassData} confirmTodo={handleConfirmPassData}/>
        </div>
    );
}
export default OngoingUi;