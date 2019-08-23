import React, { Component } from "react";

class BoardUi extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="flex-container-center">
                <div className="grid-container">
                    <div className="div-1x1 grid-inner-text">1</div>
                    <div className="div-1x2 grid-inner-text">2</div>
                    <div className="div-1x3 grid-inner-text">3</div>
                    <div className="div-2x1 grid-inner-text">4</div>
                    <div className="div-2x2 grid-inner-text">5</div>
                    <div className="div-2x3 grid-inner-text">6</div>
                    <div className="div-3x1 grid-inner-text">7</div>
                    <div className="div-3x2 grid-inner-text">8</div>
                    <div className="div-3x3 grid-inner-text">99</div>
                </div>
            </div>
            <h5 className="center"> You've moved 5 times.</h5>
            <button className="btn waves-effect waves-light chinese-font btn-center"> 再玩一次 ! </button>
            </React.Fragment>
        );
    }
}

export default BoardUi;