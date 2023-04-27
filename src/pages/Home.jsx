import React from 'react';
import Logo from "../Components/logo";
import SearchSection from "../Components/search section";
import {cardData} from "../data/card-data";
import AllCards from "../Components/all cards";
import { useTheme } from '@mui/material/styles';


function Home() {
    const theme = useTheme();
    return (
        <div>
            <SearchSection/>
            <AllCards data={cardData}/>
        </div>
    );
}

export default Home;
