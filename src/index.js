import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route } from 'react-router-dom';
import NavbarUi from "./navbarUI";
import AllUi from "./components/allUI";
import OngoingUi from "./components/onGoingUI";
import FinishedUi from "./components/finishedUI";
import TypeUi from "./components/typeUI";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

class App extends React.Component {

    // handleAdd = (newTodoContent) => {
    //     const newObj =  { content: newTodoContent, isFinished: false, id: parseInt(Math.random()*1000000) };
    //     let newTodos = [...this.state.todos, newObj];
    //     this.setState({
    //         todos: newTodos
    //     });
    // }
    // handleDelete = (newTodoList) => {
    //     this.setState({
    //         todos: newTodoList
    //     });
    // }
    // handleConfirm = (newTodoList) => {
    //     this.setState({
    //         todos: newTodoList
    //     });
    // }
    // store.dispatch({ type: "DELETE_TODO", id : id });

    render() {
        return (
            <BrowserRouter>
            <div className="app-content container">
                <h1 className="blue-text center"> Todo's </h1>
                <NavbarUi />
                <Route exact path="/" component={AllUi} />
                <Route path="/ongoing" component={OngoingUi} />
                <Route path="/finished" component={FinishedUi} />
                <TypeUi addNewTodo={this.handleAdd} />
            </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));