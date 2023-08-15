import React from 'react';
import {useTheme} from '@mui/material/styles';
import Topbar from "../Components/Topbar";
import EventCard from "../Components/card";

function Home() {
    const theme = useTheme();
    return (
        <div>
            <Topbar sx={{display: 'flex', justifyContent: 'center',}} Search AddDay Profile/>
            <EventCard/>
        </div>
    );
}

export default Home;
