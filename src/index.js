import React from "react";
import ReactDOM from "react-dom";
import TodoUi from "./todoUI";

// let element = React.createElement("h3", {style:{ color : "red" }}, "hello react");
// let element = <h3>hello react</h3>;
// ReactDOM.render(element, document.querySelector("#root"));
// console.log("hi");

class App extends React.Component {
    state = {
        todos: [
         {name: "Ryu", age: 30, id: 1},
         {name: "Andy", age: 25, id: 2}
        ]
    }
    handleClick = (e) => {
        console.log(this.state.todos);
    }
    handleDelete = (e) => {
        console.log("123");
    }
    render () {
        return (
            <div className="app-content">
                <p> My name is { this.state.todos[0].name } and I am { this.state.todos[0].age }. </p>
                <button onClick = { this.handleClick }> click </button>
                <TodoUi todoArray= { this.state.todos } deleteTodo = { this.handleDelete }/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));