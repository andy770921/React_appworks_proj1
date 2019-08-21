import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route } from 'react-router-dom';
import NavbarUi from "./navbarUI";
import AllUi from "./components/allUI";
import OngoingUi from "./components/onGoingUI";
import FinishedUi from "./components/finishedUI";
import TypeUi from "./components/typeUI";

class App extends React.Component {
    state = {
        todos: [
            { content: "Buy some milk", isFinished: false, id: 1 },
            { content: "Play games", isFinished: false, id: 2 },
            { content: "Sleep", isFinished: true, id: 3 }
        ]
    }
    handleAdd = (newTodoContent) => {
        const newObj =  { content: newTodoContent, isFinished: false, id: parseInt(Math.random()*1000000) };
        let newTodos = [...this.state.todos, newObj];
        this.setState({
            todos: newTodos
        });
    }
    handleDelete = (newTodoList) => {
        this.setState({
            todos: newTodoList
        });
    }
    handleConfirm = (newTodoList) => {
        this.setState({
            todos: newTodoList
        });
    }

    render() {
        return (
            <BrowserRouter>
            <div className="app-content container">
                <h1 className="blue-text center"> Todo's </h1>
                <NavbarUi />
                <Route exact path="/" component={props => <AllUi {...props} parentState={this.state} deleteNewTodo={this.handleDelete} confirmNewTodo={this.handleConfirm} />} />
                <Route path="/ongoing" component={props => <OngoingUi {...props} parentState={this.state} deleteNewTodo={this.handleDelete} confirmNewTodo={this.handleConfirm} />} />
                <Route path="/finished" component={props => <FinishedUi {...props} parentState={this.state} deleteNewTodo={this.handleDelete} />} />
                <TypeUi addNewTodo={this.handleAdd} />
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));