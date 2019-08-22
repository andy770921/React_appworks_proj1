import React, { Component } from "react";
import ReactDOM from "react-dom";

class Game extends Component {
    render() {
        return (
            <div className="app-content container">
                <h1 className="blue-text center"> Example Page </h1>
            </div>
        )
    }
}


ReactDOM.render(<Game />, document.querySelector("#root"));