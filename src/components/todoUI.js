import React from "react";

const TodoUi = (props) => {
    const todoList = props.todoArray.length ? (
        props.todoArray.map( element => { 
            return (
            <div className = "collection-item pos-relative content-font-size" key = { element.id }>
                <span>{ element.content }</span>
                { (props.page === "all") ? (<div class="cross" onClick = { () => props.deleteTodo(element.id) }></div>) : ( null ) }
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