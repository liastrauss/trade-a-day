import React from 'react';
import {useTheme} from "@mui/material/styles";
import Hero from "../Components/LandingComp/Hero";
import Topbar from "../Components/Topbar";


function Landing() {
    const theme = useTheme();
    return (
        <div>
            <Topbar AddDay/>
            <Hero/>
        </div>
    );
}

export default Landing;
