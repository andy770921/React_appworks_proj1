import React from "react";
import TodoUi from "./todoUI";

const OngoingUi = (props) => {
    const filteredTodos = props.parentState.todos.filter(element => { return element.isFinished === false });
    return (
        <div>
            <h4 className = "center">On Going Page</h4>
            <TodoUi todoArray={filteredTodos}/>
        </div>
    );
}
export default OngoingUi;