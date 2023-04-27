import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "./Components/logo";


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AddEvent">Trade your day</Link>
                </li>
                <li>
                    <Link to="/Messages">Chat</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;