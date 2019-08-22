import React from "react";
import TodoUi from "./todoUI";
import { connect } from "react-redux";

const OngoingUi = (props) => {
    
    const filteredTodos = props.todoArray.filter(element => { return element.isFinished === false });
    return (
        <div>
            <h4 className = "center">On Going Page</h4>
            <TodoUi todoArray={filteredTodos}/>
        </div>
    );
}

const mapStoreToProps = (state) => {
    return { todoArray : state.todos };
}

export default connect(mapStoreToProps)(OngoingUi);