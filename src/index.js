import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route } from 'react-router-dom';
import NavbarUi from "./navbarUI";
import AllUi from "./components/allUI";
import OngoingUi from "./components/onGoingUI";
import FinishedUi from "./components/finishedUI";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="app-content container">
                <h1 className="blue-text center"> Todo's </h1>
                <NavbarUi />
                <Route exact path="/" component={AllUi}/>
                <Route path="/ongoing" component={OngoingUi} />
                <Route path="/finished" component={FinishedUi} />
                
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));