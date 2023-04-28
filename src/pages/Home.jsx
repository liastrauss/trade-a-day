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

/*.cards-container {*/
/*    display: flex;*/
/*    align-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*    justify-content: space-evenly;*/
/*    margin-top: 16px;*/
/*}*/

export default Home;
