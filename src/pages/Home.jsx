import React from 'react';
import SearchSection from "../Components/search section";
import cardData from "../data/event-data.json"
import { useTheme } from '@mui/material/styles';
import Topbar from "../Components/Topbar";
import EventCard from "../Components/card";


function Home() {
    const theme = useTheme();
    return (
        <div>
            <Topbar Search AddDay Profile/>
            <SearchSection/>
            <EventCard/>
        </div>
    );
}

export default Home;
