import React from "react";

const TodoUi = (props) => {
    const todoList = props.todoArray.length ? (
        props.todoArray.map( element => { 
            return (
            <div className = "collection-item pos-relative content-font-size" key = { element.id }>
                <span style= {element.isFinished === true ? {color: 'limeGreen'} : {color: 'black'}}>{ element.content }</span>
                    <div class="cross" onClick = { () => props.deleteTodo(element.id) }></div>
                    {(element.isFinished === false) ? (<div class="victor" onClick = { () => props.confirmTodo(element.id) }></div>) : ( null )}
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