import './secondEntry.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SecondNavbarUi from "./secondNavbarUI";
import PlayUi from "./components/playUI";
import RankUi from "./components/rankUI";
import { BrowserRouter , Route } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import gameReducer from "./reducers/gameReducer";

const store = createStore(gameReducer);

class SecondApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="app-content container">
                <h1 className="blue-text center"> Puzzle Game </h1>
                <SecondNavbarUi />
                <Route exact path="/" component={PlayUi} />
                <Route path="/ranking" component={RankUi} />
            </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<Provider store={store}><SecondApp /></Provider>, document.querySelector("#root"));