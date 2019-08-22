import React, { Component } from "react";
import TodoUi from "./todoUI";
import { connect } from "react-redux";

class AllUi extends Component {

    // handleDeletePassData = (id) => {
    //     let newTodos = this.props.parentState.todos.filter(element => { return element.id !== id });
    //     this.props.deleteNewTodo(newTodos);
    // }

    // handleConfirmPassData = (id) => {
    //     let newTodos = this.props.parentState.todos.map(element => {
    //         if (element.id === id) {
    //             element.isFinished = true;
    //             return element;
    //         } else { return element; }
    //     });
    //     this.props.confirmNewTodo(newTodos);
    // }
    render() {
        return (
            <div>
                <h4 className="center"> All Todo List </h4>
                <TodoUi todoArray={this.props.todoArray} />
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return { todoArray : state.todos };
}


export default connect(mapStoreToProps)(AllUi);