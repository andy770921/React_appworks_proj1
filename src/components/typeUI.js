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
    handleClick = () => {
        location.href = 'game.html';
    }
    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit } className="flex-container-column">
                    <label>Add New Todo:</label>
                    <input type = "text" id = "content-text" />
                    <button className="btn waves-effect waves-light flex-end">submit</button>
                </form>
                <button className="btn-large waves-effect waves-light chinese-font" onClick = { this.handleClick }>不想做事，我要玩遊戲</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { addTodoRedux : newTodoContent => { dispatch({ type: "ADD_TODO", newTodoContent : newTodoContent })}};
}

export default connect(null, mapDispatchToProps)(TypeUi);