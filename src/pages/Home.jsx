import React from 'react';
import App from "../App";
import TopBar from "../Components/top bar";
import SearchSection from "../Components/search section";
import {cardData} from "../Components/card-data";
import AllCards from "../Components/all cards";


function Home() {
    return (
        <div>
            <TopBar/>
            <SearchSection/>
            <AllCards data={cardData}/>
        </div>
    );
}

export default Home;
