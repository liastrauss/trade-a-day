import React from 'react';
import App from "../App";
import TopBar from "../Components/top bar";
import SearchSection from "../Components/search section";
import RestOfPage from "../Components/rest of page";


function Home() {
    return (
        <div>
            <TopBar/>
            <SearchSection/>
            <RestOfPage/>
        </div>
    );
}

export default Home;
