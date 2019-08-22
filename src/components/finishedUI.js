import React from "react";
import TodoUi from "./todoUI";
import { connect } from "react-redux";

const FinishedUi = (props) => {

    // function handleDeletePassData (id) {
    //     let newTodos = props.parentState.todos.filter(element => { return element.id !== id });
    //     props.deleteNewTodo(newTodos);
    // }

    const filteredTodos = props.todoArray.filter(element => { return element.isFinished === true });
    return (
        <div>
            <h4 className = "center">Finished Page</h4>
            <TodoUi todoArray={filteredTodos}/>
        </div>
    );
}

const mapStoreToProps = (state) => {
    return { todoArray : state.todos };
}

export default connect(mapStoreToProps)(FinishedUi);