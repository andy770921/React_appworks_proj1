import React, { Component } from "react";
import TodoUi from "./todoUI";

class AllUi extends Component {

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.todos);
    //     console.log(this.props.parentState.todos);
    // }
    handleDeletePassData = (id) => {
        let newTodos = this.props.parentState.todos.filter(element => { return element.id !== id });
        this.props.deleteNewTodo(newTodos);
    }
    
    render() {
        return (
            <div> 
                <h4 className="center"> All Todo List </h4>
                {/* <button onClick={this.handleSubmit}>click</button> */}
                <TodoUi todoArray={this.props.parentState.todos} deleteTodo={this.handleDeletePassData} page="all"/>
            </div>
        )
    }
}

export default AllUi;