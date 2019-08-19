import React from "react";
import ReactDOM from "react-dom";

// let element = React.createElement("h3", {style:{ color : "red" }}, "hello react");
let element = <h3>hello react</h3>;
ReactDOM.render(element, document.querySelector("#root"));
// console.log("hi");