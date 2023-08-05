import React from 'react';
import {useTheme} from "@mui/material/styles";
import Hero from "../Components/LandingComp/Hero";
import Companies from "../Components/LandingComp/Companies";
import Guide from "../Components/LandingComp/Guide";
import Properties from "../Components/LandingComp/Properties";
import Details from "../Components/LandingComp/Details";
import GetStarted from "../Components/LandingComp/GetStarted";
import Topbar from "../Components/Topbar";
import Box from '@mui/material/Box';


function Landing() {
    const theme = useTheme();
    return (
        <div>
            <Topbar AddDay/>
            <Hero />
            {/*these could be relevant:*/}
            {/*<Details />*/}
            {/*<Companies />*/}
            {/*<Guide />*/}
            {/*this one is worse <Properties />*/}
            {/*<GetStarted />*/}
            {/* this one is worse <Footer />*/}
        </div>
    );
}

export default Landing;
