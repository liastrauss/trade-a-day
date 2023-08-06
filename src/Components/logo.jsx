import React from "react";
import logo from "./logo.svg";
// making the logo clickable:
import { useNavigate } from "react-router-dom"
import {useMediaQuery} from "@mui/material";

function Logo() {
    let navigate = useNavigate();
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <div className="logo">
            <img
                src={logo} alt="Logo"
                style={{
                    cursor: 'pointer',
                    width: isXsScreen ? '80%' : '100%',
                    minWidth: '65px', // Set a fixed minimum width of 65px
                    height: 'auto', // Maintain aspect ratio
                }}
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