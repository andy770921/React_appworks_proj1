import React, { Component } from "react";

class EnterNameUi extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        if (document.querySelector("#name-text").value !== "") {
            // this.props.addTodoRedux(document.querySelector("#name-text").value);
            console.log(document.querySelector("#name-text").value);
            document.querySelector("#name-text").value = "";
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex-container-row container">
                <div className="flex-container-column flex-3">
                <label>Enter Your Name:</label>
                <input type="text" className="margin-0" id="name-text" />
                </div>
                <button className="btn waves-effect waves-light flex-end chinese-font flex-1"> 報名參賽 </button>
            </form>
        );
    }
}

export default EnterNameUi;