import React, { Component } from "react";
import { connect } from "react-redux";

class TypeUi extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        if (document.querySelector("#content-text").value !== "") {
            this.props.addTodoRedux(document.querySelector("#content-text").value);
            document.querySelector("#content-text").value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <label>Add New Todo:</label>
                    <input type = "text" id = "content-text" />
                    <button className="btn waves-effect waves-ligh">submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { addTodoRedux : newTodoContent => { dispatch({ type: "ADD_TODO", newTodoContent : newTodoContent })}};
}

export default connect(null, mapDispatchToProps)(TypeUi);