import React from "react";
import ReactDOM from "react-dom";
import TodoUi from "./todoUI";
import TypeUi from "./typeUI";

class App extends React.Component {
    state = {
        todos: [
            { content: "Buy some milk", isFinished: false, id: 1 },
            { content: "Play games", isFinished: false, id: 2 }
        ]
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.todos);
    }
    handleDelete = (id) => {
        let newTodos = this.state.todos.filter(element => { return element.id !== id });
        this.setState({
            todos: newTodos
        });
    }
    handleAdd = (newTodoContent) => {
        const newObj =  { content: newTodoContent, isFinished: false, id: this.state.todos.length + 1 };
        console.log(newObj);
        let newTodos = [...this.state.todos, newObj];
        this.setState({
            todos: newTodos
        });
    }
    render() {
        return (
            <div className="app-content container">
                <h1 className="blue-text center"> Todo's </h1>
                <TodoUi todoArray={this.state.todos} deleteTodo={this.handleDelete} />
                <TypeUi addNewTodo={this.handleAdd} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));