import React, { Component } from "react";
import { connect } from "react-redux";

class EnterNameUi extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        if (document.querySelector("#name-text").value !== "") {
            this.props.addUserRedux(document.querySelector("#name-text").value);
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

const mapDispatchToProps = (dispatch) => {
    return { addUserRedux : newUser => { dispatch({ type: "ADD_USER", newUser : newUser })}};
}

export default connect(null, mapDispatchToProps)(EnterNameUi);