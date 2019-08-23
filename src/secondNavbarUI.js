import React from "react";
import { Link } from "react-router-dom";

const SecondNavbarUi = () => {
    return (
        <nav className = "nav-wrapper blue lighten-3">
            <ul className = "flex-container-center">
                <li><Link className="black-text nav-font-size" to= "/gameplay">Play</Link></li>
                <li><Link className="black-text nav-font-size" to= "/gamerank">Rank</Link></li>
            </ul>
        </nav>
    );
}
export default SecondNavbarUi;