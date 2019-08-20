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
                
                <NavbarUi />
                <Route exact path="/dist/index.html" component={AllUi}/>
                <Route path="/ongoing" component={OngoingUi} />
                <Route path="/finished" component={FinishedUi} />
                
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));