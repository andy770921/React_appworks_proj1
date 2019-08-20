import React from "react";

const TodoUi = (props) => {
    // console.log(props);
    // console.log(props.deleteTodo);
    const todoList = props.todoArray.length ? (
        props.todoArray.map( element => { 
            return (
            <div className = "collection-item pos-relative" key = { element.id }>
                <span>{ element.content }</span><div class="cross" onClick = { () => props.deleteTodo(element.id) }></div>
            </div> )})
    ) : (
        <p className = "center"> You have no todo's left </p>
    );
    return (
        <div className = "todo-list collection">
            { todoList }
        </div>
    );
}
export default TodoUi;