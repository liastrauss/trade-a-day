import React from 'react';
import {useTheme} from "@mui/material/styles";
import Hero from "../Components/LandingComp/Hero";
import Companies from "../Components/LandingComp/Companies";
import Guide from "../Components/LandingComp/Guide";
import Properties from "../Components/LandingComp/Properties";
import Details from "../Components/LandingComp/Details";
import GetStarted from "../Components/LandingComp/GetStarted";


function Landing() {
    const theme = useTheme();
    return (
        <div>
            <Hero />
            <Companies />
            <Guide />
            {/*<Properties />*/}
            <Details />
            <GetStarted />
            {/*<Footer />*/}
        </div>
    );
}

export default Landing;
