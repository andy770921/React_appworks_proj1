import React from "react";

const TodoUi = (props) => {
    console.log(props);
    console.log(props.deleteTodo);
    const todoList = <div> hi andy </div>;
    return (
        <div className = "todo-list">
            { todoList }
        </div>
    );
}
export default TodoUi;