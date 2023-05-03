import React from 'react';
import Logo from "../Components/logo";
import SearchSection from "../Components/search section";
import {cardData} from "../data/card-data";
import AllCards from "../Components/all cards";
import { useTheme } from '@mui/material/styles';
import Topbar from "../Components/Topbar";


function Home() {
    const theme = useTheme();
    return (
        <div>
            <Topbar Search AddDay Profile/>
            <SearchSection/>
            <AllCards data={cardData}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
                alignSelf: 'flex-start'
            }}
            />
        </div>
    );
}

export default Home;
