import React from "react";
import ReactDOM from "react-dom";
import TodoUi from "./todoUI";

class App extends React.Component {
    state = {
        todos: [
         {content: "Buy some milk", isFinished: false, id: 1},
         {content: "Play games", isFinished: false, id: 2}
        ]
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.todos);
    }
    handleDelete = (id) => {
        let newTodos = this.state.todos.filter( element => { return element.id !== id });
        this.setState({
          todos: newTodos
        });
    }
    render () {
        return (
            <div className="app-content container">
                <h1 className="blue-text center"> Todo's </h1> 
                <button onClick = { this.handleSubmit }> click </button>
                <TodoUi todoArray= { this.state.todos } deleteTodo = { this.handleDelete }/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));