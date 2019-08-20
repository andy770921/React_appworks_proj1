import React from "react";

const NavbarUi = () => {
    return (
        <nav className = "nav-wrapper blue lighten-3">
            <ul className = "flex-container-center">
                <li><a className="black-text nav-font-size" href = "/dist/index.html">All</a></li>
                <li><a className="black-text nav-font-size" href = "/ongoing">On Going</a></li>
                <li><a className="black-text nav-font-size" href = "/finished">Finished</a></li>
            </ul>
        </nav>
    );
}
export default NavbarUi;