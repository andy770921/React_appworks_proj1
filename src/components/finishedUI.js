import React from "react";
import TodoUi from "./todoUI";

const FinishedUi = (props) => {
    const filteredTodos = props.parentState.todos.filter(element => { return element.isFinished === true });
    return (
        <div>
            <h4 className = "center">Finished Page</h4>
            <TodoUi todoArray={filteredTodos}/>
        </div>
    );
}
export default FinishedUi;