import React from 'react';
import {useTheme} from "@mui/material/styles";
import Hero from "../Components/LandingComp/Hero";
import Topbar from "../Components/Topbar";


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
