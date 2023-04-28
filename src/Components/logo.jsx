import React from "react";
import logo from "./logo.svg";
// making the logo clickable:
import { useNavigate } from "react-router-dom"

function Logo() {
    let navigate = useNavigate();
    return (
        <div className="logo">
            <img
                src={logo} alt="Logo"
                style={{cursor:'pointer'}}
                // this function enables to click to homepage
                onClick={()=>
                {
                    navigate("/");
                }}
            />
        </div>
    );
}


export default Logo;