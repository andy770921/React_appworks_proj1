import React, { Component } from "react";
import { connect } from "react-redux";



class BoardUi extends Component {

    findEmptyBox = () => {
        let emptyItemArray = this.props.blockArray.filter(element => (element.value === 99));
        return emptyItemArray[0].position;
    }
    findAdjacent = (emptyPosition) => {
        const firstNum = parseInt(emptyPosition.slice(0, 1));
        const lastNum = parseInt(emptyPosition.slice(2));
        const posiblePosition = [firstNum + "x" + (lastNum + 1), firstNum + "x" + (lastNum - 1), (firstNum + 1) + "x" + lastNum, (firstNum - 1) + "x" + lastNum];
        let adjacentPosition = posiblePosition.filter(str => !(str.indexOf("0") !== -1 || (str.indexOf("4") !== -1)));
        return adjacentPosition;

    }
    setAdjState = (adjPositionArray) => {
        let resetedState = this.state;
        resetedState.block.forEach(element => (element.isAdjacent = false));
        let newBlockArray = [];
        for (let i = 0; i < adjPositionArray.length; i++) {
            newBlockArray = resetedState.block.map(element => {
                if (adjPositionArray[i] === element.position) {
                    element.isAdjacent = true;
                    return element;
                } else { return element; }
            });
        }
    }
    handleClick = (a,b) => {
       return () => { this.props.shuffleRedux(a, b)};
}
// handleClick2 = (a,b) => {
//     return function abc () {this.props.shuffleRedux(a, b)};
// }
    componentDidMount() {
        let emptyPosition = this.findEmptyBox();
        let adjPositionArray = this.findAdjacent(emptyPosition);
        //this.props.setAdjacentRedux(adjPositionArray);
        for (let i = 0; i < adjPositionArray.length; i++) {
            document.getElementsByClassName("div-" + adjPositionArray[i])[0].classList.add("add-cursor");
            document.getElementsByClassName("div-" + adjPositionArray[i])[0].addEventListener("click", this.handleClick(emptyPosition, adjPositionArray[i]));
            document.getElementsByClassName("div-" + adjPositionArray[i])[0].removeEventListener("click", this.handleClick(emptyPosition, adjPositionArray[i]));
            // document.getElementsByClassName("div-" + adjPositionArray[i])[0].setAttribute("onclick", this.handleClick2(emptyPosition, adjPositionArray[i]));
        }
    }
    componentDidUpdate() {
        let emptyPosition = this.findEmptyBox();
        let adjPositionArray = this.findAdjacent(emptyPosition);

        for (let i = 0; i < this.props.blockArray.length; i++) {
            document.getElementsByClassName("grid-inner-text")[i].classList.remove("add-cursor");
            //document.getElementsByClassName("grid-inner-text")[i].removeEventListener("click", this.handleClick());
        }

        for (let i = 0; i < adjPositionArray.length; i++) {
            document.getElementsByClassName("div-" + adjPositionArray[i])[0].classList.add("add-cursor");
            //document.getElementsByClassName("div-" + adjPositionArray[i])[0].addEventListener("click", this.handleClick(emptyPosition, adjPositionArray[i]))
        }
        console.log('hi');
    }
    render() {
        //let emptyPosition = this.findEmptyBox();
        //let adjPositionArray = this.findAdjacent(emptyPosition);
        //this.props.setAdjacentRedux(adjPositionArray);
        //this.setAdjState(adjPositionArray);
        return (
            <React.Fragment>
                <div className="flex-container-center">
                    <div className="grid-container">
                        <div className="div-1x1 grid-inner-text">{this.props.blockArray[0].value}</div>
                        <div className="div-1x2 grid-inner-text">{this.props.blockArray[1].value}</div>
                        <div className="div-1x3 grid-inner-text">{this.props.blockArray[2].value}</div>
                        <div className="div-2x1 grid-inner-text">{this.props.blockArray[3].value}</div>
                        <div className="div-2x2 grid-inner-text">{this.props.blockArray[4].value}</div>
                        <div className="div-2x3 grid-inner-text">{this.props.blockArray[5].value}</div>
                        <div className="div-3x1 grid-inner-text">{this.props.blockArray[6].value}</div>
                        <div className="div-3x2 grid-inner-text">{this.props.blockArray[7].value}</div>
                        <div className="div-3x3 grid-inner-text">{this.props.blockArray[8].value}</div>
                    </div>
                </div>
                <h5 className="center"> You've moved 5 times.</h5>
                <button className="btn waves-effect waves-light chinese-font btn-center"> 再玩一次 ! </button>
            </React.Fragment>
        );
    }
}

const mapStoreToProps = (state) => {
    return { blockArray: state.block };
}

const mapDispatchToProps = (dispatch) => {
    return {
        shuffleRedux: (emptyPosition, targetPosition) => { dispatch({ type: "SHUFFLE", emptyPosition: emptyPosition, targetPosition: targetPosition }) },
        setAdjacentRedux: (adjPositionArray) => { dispatch({ type: "SET_ADJ", adjPositionArray: adjPositionArray }) }
    };
}

export default connect(mapStoreToProps, mapDispatchToProps)(BoardUi);